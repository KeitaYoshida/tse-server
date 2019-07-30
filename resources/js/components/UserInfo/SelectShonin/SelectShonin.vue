<template>
  <v-container grid-list-xs v-if="user_info">
    <h2>承認者選択画面</h2>
    <v-data-table
      :headers="headers"
      :items="user_info"
      class="elevation-1 mb-5"
      select-all
      hide-actions
      pagination.sync="pagination"
      item-key="id"
      search
      v-model="selected"
    >
      <template v-slot:items="props">
        <td>
          <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
        </td>
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.loginid }}</td>
      </template>
    </v-data-table>
    <v-bottom-nav fixed value="value" active.sync="value">
      <v-btn flat color="primary" to="/home">
        <span>戻る</span>
        <v-icon>fas fa-chevron-circle-left</v-icon>
      </v-btn>
      <v-btn flat color="primary" @click="make()">
        <span>決定</span>
        <v-icon>fas fa-check-circle</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      user_info: null,
      headers: [
        { text: "ユーザー名", value: "name", align: "center" },
        { text: "ユーザーID", value: "loginid", align: "center" }
      ],
      selected: [],
      own_info: null
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    async init() {
      await axios.get("/userinfo").then(res => {
        this.own_info = res.data;
      });
      await axios
        .get("/db/user_info/shonin/child/" + this.own_info.id)
        .then(res => {
          let sl = this.selected;
          res.data[0].shonin.forEach(ar => {
            sl.push({
              id: ar.userdata.id,
              loginid: ar.userdata.loginid
            });
          });
        });
      await axios.get("/db/user_info/all").then(res => {
        this.user_info = res.data.filter(ar => {
          return ar.loginid !== this.own_info.loginid;
        });
      });
    },
    make() {
      if (this.selected.length === 0) {
        alert("値が選択されていません");
        return;
      }
      let d = [];
      this.selected.forEach((ar, n) => {
        d[n] = {
          user_id: this.own_info.id,
          children_id: ar.id
        };
      });
      console.log(d);
      axios
        .post("/db/user_info/shonin_relation/" + this.own_info.id, d)
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>