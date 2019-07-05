<template>
  <article>
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
import ItemData from "./../../mixins/ItemData";

export default {
  mixins: [ItemData],
  props: ["item_code", "item_rev"],
  components: {},
  data: function() {
    return {};
  },
  created: async function() {
    await this.get_item_data();
    const outer = ["lot_num", "minimum_set"];
    this.out(outer);
  }
};
</script>


<style lang="scss" >
</style>