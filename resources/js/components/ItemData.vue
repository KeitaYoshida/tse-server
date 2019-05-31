<template>
  <v-app id="ItemData">
    <main>
      <v-container grid-list-xs>
        <item-info :item_code="item_code" :item_rev="item_rev"></item-info>
        <bottom-nav-and-dialog :btn_nav="btn_nav" v-on:pflag="viewDialg"></bottom-nav-and-dialog>
        <v-dialog v-model="btn_nav.view.shukei" width="80%">
          <Shukei v-if="btn_nav.view.shukei" :item_code="item_code" :item_rev="item_rev"></Shukei>
        </v-dialog>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import itemInfo from "./ItemData/ItemInfo";
import bottomNavAndDialog from "./ItemData/bottomNavAndDialog";
import comScript from "./ItemData/data.js";
import Shukei from "./act/Shukei";

export default {
  mixins: [comScript],
  components: {
    itemInfo,
    bottomNavAndDialog,
    Shukei
  },
  data: function() {
    return {
      item_code: this.$route.params.item_code,
      item_rev: this.$route.params.item_rev
    };
  },
  methods: {
    viewDialg(target) {
      Object.keys(this.btn_nav.view).forEach(
        (value, index) => (this.btn_nav.view[value] = false)
      );
      this.btn_nav.view[target] = true;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-size: 1.4rem;
}
</style>
