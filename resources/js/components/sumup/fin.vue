<template>
  <v-app>
    <v-container grid-list-xs>
      <transition name="fade" mode="out-in">
        <template v-if="!items">
          <div>
            <h2 class="flash2">データ取得中</h2>
            <h3 class="flash">部材データ取得中</h3>
            <Loading></Loading>
          </div>
        </template>
        <template v-else-if="!history">
          <div>
            <h2 class="flash2">データ取得中</h2>
            <h3 class="flash">部材データ --> 集計履歴取得中</h3>
            <Loading></Loading>
          </div>
        </template>
        <template v-else-if="worklist_fin_num != worklist_length">
          <div>
            <h2 class="flash2">データ取得中</h2>
            <h3 class="flash3">工事部材データ：{{tar_worklist_code}}</h3>
            <h3 class="flash">
              <v-progress-linear :value="worklist_fin_num / worklist_length * 100"></v-progress-linear>
            </h3>
            <Loading></Loading>
          </div>
        </template>
        <template v-else>
          <div class="text-xs-center mt-5">
            <h2 class="mb-5">データ取得完了</h2>
            <p>完了データ登録を行うと、棚卸しデータがすべてクリア（初期化）されます</p>
            <p>作業中に完了にしないよう注意してください</p>
            <v-layout row wrap pt-4>
              <v-flex xs5 offset-xs1 class="text-xs-center">
                <strong
                  large
                  outline
                  class="total primary--text"
                >総部材集計金額: {{price_items_total.toLocaleString()}}</strong>
              </v-flex>
              <v-flex xs5 class="text-xs-center">
                <strong
                  large
                  outline
                  class="total primary--text"
                >総部仕掛り部材計金額: {{price_working_total.toLocaleString()}}</strong>
              </v-flex>
              <v-flex xs12 class="text-xs-center primary--text pt-5 total">
                <strong>担当者： {{ user.name }}</strong>
              </v-flex>
            </v-layout>
            <v-btn block color="primary" outline class="my-5" @click="alfin()">完了データ登録</v-btn>
          </div>
        </template>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Loading from "@/components/com/Loading";

export default {
  props: [],
  components: {
    Loading
  },
  data: function() {
    return {
      items: [],
      lists: null,
      history: null,
      worklist_length: 1,
      worklist_fin_num: 0,
      tar_worklist_code: "",
      price_working_total: 0,
      price_items_total: 0
    };
  },
  computed: {
    ...mapState({
      user: "user_info"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    async init() {
      let item = await axios.get("/items/mini");
      for (let it of item.data) {
        this.price_items_total =
          this.price_items_total + Number(it.item_price) * Number(it.inv_num);
        this.items.push({
          inv_date
        });
      }
      let his = await axios.get("/db/inventory/history/day/" + 60);
      this.history = his.data;
      await axios.get("/db/inventory/working/const/list").then(async res => {
        let lists = res.data;
        this.lists = lists;
        this.worklist_length = lists.length;
        for (let list of lists) {
          this.tar_worklist_code = list.worklist_code;
          await this.workItems(list.worklist_id, list.worklist_code, list);
          this.worklist_fin_num = this.worklist_fin_num + 1;
        }
      });
      this.price_items_total = Math.round(this.price_items_total);
      this.price_working_total = Math.round(this.price_working_total);
    },
    async workItems(id, code, li) {
      return;
      const Fin = 2;
      li.items = [];
      li.reCheckPrice = 0;
      let list = await axios.get("/db/workdata/process/" + id);
      let process = {};
      for (let serial of list.data[0].serials) {
        for (let p of serial.process) {
          if (p.process_status === Fin) {
            process[p.work_id] =
              process[p.work_id] === undefined ? 1 : process[p.work_id] + 1;
          }
        }
      }
      for (let pid of Object.keys(process)) {
        await axios.get("/db/workdata/cmpt/items/" + pid).then(res => {
          for (let item of res.data) {
            let tar = li.items.filter(ar => ar.item_id === item.item_id);
            li.reCheckPrice =
              li.reCheckPrice +
              Number(item.item_use) * process[pid] * item.items.item_price;
            if (tar.length === 0) {
              tar = [
                {
                  item_id: item.item_id,
                  item_use: Number(item.item_use) * process[pid],
                  item_code: item.items.item_code,
                  item_model: item.items.item_model,
                  item_name: item.items.item_name,
                  item_price: item.items.item_price
                }
              ];
              li.items.push(tar[0]);
            } else {
              tar[0].item_use =
                Number(tar[0].item_use) + Number(item.item_use) * process[pid];
            }
          }
        });
      }
      this.price_working_total = this.price_working_total + li.reCheckPrice;
    },
    alfin() {
      console.log(this.items);
    }
  }
};
</script>

<style lang="scss" scoped>
.flash {
  animation: flash 2s linear infinite;
  margin-top: 5%;
  text-align: center;
  color: cornflowerblue;
}
.flash2 {
  animation: flash 2s linear infinite;
  margin-top: 3%;
  text-align: center;
  color: cornflowerblue;
}
.flash3 {
  animation: flash 2s linear infinite;
  margin-top: 0%;
  text-align: center;
  color: cornflowerblue;
}
.total {
  font-size: 1.8rem;
}
@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>