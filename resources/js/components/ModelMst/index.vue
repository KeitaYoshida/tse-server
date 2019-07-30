<template>
  <v-app>
    <v-container>
      <h1>形式マスタ</h1>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <br />
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        :rows-per-page-items="view_row_setting"
        :loading="loading"
        item-key="model_id"
        class="model"
      >
        <template v-slot:items="props">
          <tr @click="props.expanded = !props.expanded">
            <td class="text-xs-center">
              <p class="model-code">{{ props.item.model_code }}</p>
              <span class="ne blue-grey--text">{{ props.item.model_code_ne }}</span>
              <span class="rev blue-grey--text">{{ props.item.model_rev.numToRev() }}</span>
            </td>
            <td class="text-xs-center">{{ props.item.model_name }}</td>
            <td class="align-center justify-center layout px-0">
              <router-link :to="'/item/' + props.item.item_code + '/' + props.item.item_rev">
                <v-btn color="deep-orange lighten-2" outline small>
                  <v-icon small left class="icon-edit">far fa-list-alt</v-icon>手配
                </v-btn>
              </router-link>
              <router-link :to="'/item/' + props.item.item_code + '/' + props.item.item_rev">
                <v-btn color="success" outline small>
                  <v-icon small left class="icon-edit">fas fa-edit</v-icon>構成
                </v-btn>
              </router-link>
            </td>
          </tr>
        </template>
        <template v-slot:expand="props">
          <v-layout wrap>
            <v-flex
              xs6
              md4
              lg3
              v-for="(item, index) in props.item.cmpt"
              :key="index"
              class="pa-3 cmpt"
            >
              <v-card flat class="cmpt_card" color="indigo--text text--lighten-2">
                <v-card-text class="cmpt_text">
                  <p>{{ item.cmpt_code }}</p>
                  <p class="cmpt_rev">{{ item.cmpt_rev.numToRev() }}</p>
                  <p class="cmpt_name">{{ item.cmpt_name }}</p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      items: [],
      headers: [
        { text: "形式", value: "model_code", align: "center" },
        { text: "形式名", value: "model_name", align: "center" }
      ],
      search: "",
      view_row_setting: [
        20,
        50,
        100,
        {
          text: "$vuetify.dataIterator.rowsPerPageAll",
          value: -1
        }
      ],
      loading: true
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      axios.get("/db/model_mst/list").then(res => {
        this.items = res.data;
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.model-code {
  font-size: 1.5rem;
  margin: 0;
  padding-top: 0.5rem;
}
.ne {
  padding-left: 3rem;
  font-size: 1rem;
  padding-bottom: 0.5rem;
}
.rev {
  font-size: 1rem;
  padding: 0 0.5rem;
}
.cmpt_card {
  border: 1px solid #7986cb;
  p {
    margin-bottom: 0.2rem;
  }
}
.cmpt {
  text-align: center;
}
.cmpt_text {
  font-size: 1rem;
}
.cmpt_rev {
  font-size: 0.5rem;
  text-align: right;
  margin-right: 10%;
}
</style>
