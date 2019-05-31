<template>
  <article>
    <v-toolbar color="teal lighten-3" dark>
      <v-toolbar-title>部材情報</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <table id="item_info" class="torks_com">
      <tr v-for="(item, index) in item_data" :key="index">
        <td class="icon">
          <v-icon>{{ item.icon }}</v-icon>
        </td>
        <td class="title">{{ item.title }}</td>
        <td class="value">{{ !item.value ? '-' : item.value }}</td>
      </tr>
    </table>
  </article>
</template>

<script>
export default {
  props: ["item_code", "item_rev"],
  components: {},
  data: function() {
    return {
      item_data: null,
      vendor: null
    };
  },
  created: async function() {
    await axios
      .get("/items/iteminfo/" + this.item_code + "/" + this.item_rev)
      .then(response => {
        this.item_data = [
          {
            icon: "fas fa-barcode",
            title: "部材シリアル",
            value: response.data[0].item_id
          },
          {
            icon: "fas fa-info",
            title: "品目コード",
            value: response.data[0].item_code
          },
          {
            icon: "fas fa-arrow-alt-circle-up",
            title: "Rev",
            value: this.get__chk(response.data[0].item_rev)
          },
          {
            icon: "fas fa-info",
            title: "手配コード",
            value: response.data[0].order_code
          },
          {
            icon: "fas fa-id-badge",
            title: "品名",
            value: response.data[0].item_name
          },
          {
            icon: "fas fa-id-card",
            title: "品目形式",
            value: response.data[0].item_model
          },
          {
            icon: "fas fa-map-marked",
            title: "製造元",
            value: response.data[0].maker_name
          },
          {
            icon: "fas fa-arrows-alt-h",
            title: "RT",
            value: this.get__chk(response.data[0].read_time)
          },
          {
            icon: "fas fa-calculator",
            title: "在庫数",
            value: this.get__chk(response.data[0].last_num)
          },
          {
            icon: "fas fa-calculator",
            title: "使用予約数",
            value: this.get__chk(response.data[0].appo_num)
          }
        ];
        if (response.data[0].vendor) {
          response.data[0].vendor.forEach(ob => {
            this.item_data.push({
              icon: "fas fa-money-bill-wave",
              title: "手配金額",
              value:
                "[" + ob.vendname.com_name + "] " + ob.vendor_item_price + " ¥"
            });
          });
        }
      })
      .catch(error => {
        console.log("Error : " + error);
      });
  }
};
</script>


<style lang="scss" >
</style>