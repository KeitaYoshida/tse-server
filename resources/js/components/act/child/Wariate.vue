<template>
  <table id="wariate" class="torks_com center">
    <tr v-if="items">
      <td>手配コード</td>
      <td>親形式</td>
      <td>受入数</td>
      <td>集計数</td>
      <td>割当</td>
    </tr>
    <tr v-else>
      <td>受入済み手配データ無し</td>
    </tr>
    <tr v-for="(item, index) in items" :key="index">
      <td>{{ item.cnt_order_code }}</td>
      <td>{{ item.assy_code }}</td>
      <td>{{ item.num_recept }}</td>
      <td>{{ item.num_inv }}</td>
      <td>
        <v-btn flat icon @click="setInv(item)">
          <v-icon>far fa-hand-point-up</v-icon>
        </v-btn>
      </td>
    </tr>
  </table>
</template>

<script>
import { assertExpressionStatement } from "babel-types";
export default {
  props: ["items", "item_data", "main", "his"],
  data: function() {
    return {
      etc_num: 0
    };
  },
  created: function() {
    this.items.forEach(arr => {
      this.etc_num = this.item_data.inv_num - arr.num_inv;
    });
  },
  methods: {
    setInv(item) {
      let main = this.main;
      let info = this.item_data;
      if (!main.cnt_num || main.cnt_num === 0) {
        return;
      }
      this.setInv_plus(item, main, info);
    },
    setInv_plus(item, main, info) {
      let plus_num = 0;
      if (main.cnt_num < 0) {
        plus_num = -main.cnt_num < item.num_inv ? main.cnt_num : -item.num_inv;
      } else {
        plus_num = item.num_recept - item.num_inv;
      }
      if (main.cnt_num < plus_num && main.cnt_num > 0) {
        plus_num = main.cnt_num;
      }
      this.setInv_plus_act(item, main, info, plus_num);
      this.setInv_setDb(item, info, plus_num);
    },
    setInv_plus_act(item, main, info, tarNum) {
      item.num_inv = Number(item.num_inv) + Number(tarNum);
      info.inv_num = Number(info.inv_num) + Number(tarNum);
      main.cnt_num = Number(main.cnt_num) - Number(tarNum);
    },
    async setInv_setDb(item, info, tarNum) {
      let m = "/";
      let url = "/items/up_item_num_inv/";
      url = url + info.item_code + m;
      url = url + info.item_rev + m;
      url = url + tarNum + m;
      url = url + item.cnt_order_code + m;
      url = url + item.assy_code;
      let his = this.his;
      await axios
        .get(url)
        .then(res => {})
        .catch(error => {
          console.log("Error : " + error);
        });
      await axios
        .get("/items/item_inv_his/" + info.item_code + "/" + info.item_rev)
        .then(res => {
          his = res.data;
          console.log(his);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
