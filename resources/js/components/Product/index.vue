<template>
  <v-app id="main">
    <v-container grid-list-xs>
      <transition name="fade">
        <Loading v-if="loading"></Loading>
        <div v-else>
          <h1>製造データ</h1>
          <v-text-field
            name="search"
            label="検索"
            id="search"
            v-model="search"
            prepend-inner-icon="fas fa-search"
          ></v-text-field>
          <v-data-table
            :headers="headers"
            :items="pdct"
            item-key="pdct_id"
            :search="search"
            :rows-per-page-items="[25,50,{'text':'All','value':-1}]"
            :pagination.sync="pagination"
          >
            <template v-slot:items="props">
              <td class="text-xs-center">
                <p class="pt-1 pb-1">
                  <v-chip
                    outline
                    :class="addClassClass(props.item.pdct_class)"
                  >{{ props.item.pdct_class }}</v-chip>
                </p>
                <p class="pb-1">
                  <v-chip
                    outline
                    :class="addClassClass(props.item.status.st_val)"
                  >{{ props.item.status.st_val }}</v-chip>
                </p>
              </td>
              <td class="text-xs-center">{{ props.item.model_id }}</td>
              <td class="text-xs-center">{{ props.item.const_code }}</td>
              <td class="text-xs-center">{{ props.item.all_num }}</td>
              <td class="text-xs-center">{{ props.item.all_price.toLocaleString() }}</td>
              <td class="text-xs-center">
                <v-btn color="warning" outline small>受注</v-btn>
                <v-btn color="success" outline small>注文</v-btn>
                <v-btn color="primary" outline small>製造</v-btn>
              </td>
            </template>
          </v-data-table>
        </div>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
import Loading from "./../com/Loading";

export default {
  components: {
    Loading
  },
  data: function() {
    return {
      loading: true,
      pdct: null,
      search: "",
      headers: [
        { text: "区分", value: "pdct_class", align: "center" },
        { text: "形式", value: "model_id", align: "center" },
        { text: "製造コード", value: "pdct_code", align: "center" },
        { text: "総受注数", value: "all_num", align: "center" },
        { text: "総受注金額", value: "all_price", align: "center" }
      ],
      pagination: {
        sortBy: "model_id",
        descending: false
      }
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      axios.get("/db/pdct/list/live").then(res => {
        let d = (this.pdct = res.data);
        d.forEach((ar, index) => {
          if (ar.pdct_status !== 9) {
            let another_del = false;
            let all_num = 0;
            let all_price = 0;
            ar.child.forEach((a, ind) => {
              another_del = a.rcpt_status !== 9 ? true : another_del;
              all_num = all_num + a.order_num;
              all_price = all_price + a.order_num * a.order_price_one;
            });
            if (another_del === false) {
              ar.status.pdct_status = 9;
              ar.status.st_val = "リンク切れ";
              console.log("リンク切れ" + ar.const_code);
              axios.get("/db/pdct/nolink/" + ar.pdct_id);
            }
            ar.all_num = all_num;
            ar.all_price = all_price;
          }
        });
        this.loading = false;
      });
    },
    addClassClass(val) {
      let addClass = "";
      switch (val) {
        case "部品":
          addClass = "buhin";
          break;
        case "修理":
          addClass = "shuri";
          break;
        case "製品":
          addClass = "seihin";
          break;
        case "他":
          addClass = "etc";
          break;
        case "新規":
          addClass = "shinki";
          break;
      }
      return addClass;
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  p {
    text-align: center;
    padding-bottom: 0;
    margin-bottom: 0;
  }
}
.v-chip {
  font-size: 0.9rem;
  margin: 0;
  border-radius: 5px;
}
.v-chip.v-chip.v-chip--outline {
  height: 24px;
}
.v-chip.buhin {
  border-color: #4e342e;
  color: #4e342e;
}
.v-chip.shuri {
  border-color: #ef6c00;
  color: #ef6c00;
}
.v-chip.seihin {
  border-color: #283593;
  color: #283593;
}
.v-chip.etc {
  border-color: #2e7d32;
  color: #2e7d32;
}
.v-chip.shinki {
  border-color: #4caf50;
  color: #4caf50;
}
</style>
