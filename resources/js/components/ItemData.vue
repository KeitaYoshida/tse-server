<template>
  <v-app>
    <main>
      <v-container grid-list-xs>
        <v-toolbar color="teal lighten-3" dark v-if="!view">
          <v-toolbar-title>部材情報</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <item-info :item_code="item_code" :item_rev="item_rev" v-if="!view"></item-info>
      </v-container>
    </main>
    <bottom-nav-and-dialog :btn_nav="btn_nav" v-on:pflag="viewDialg"></bottom-nav-and-dialog>
    <v-dialog v-model="btn_nav.view.shukei" width="80%" @input="close" overflow>
      <Shukei v-if="btn_nav.view.shukei" :item_code="item_code" :item_rev="item_rev"></Shukei>
    </v-dialog>
    <v-dialog v-model="btn_nav.view.ukeire" width="80%" @input="close" overflow>text</v-dialog>
    <v-dialog v-model="btn_nav.view.shiyo" width="80%" @input="close" overflow>
      <p>test</p>
    </v-dialog>
    <v-dialog v-model="btn_nav.view.image" @input="close" id="item_dialog" dark>
      <ItemImg v-if="btn_nav.view.image" :path="img_path" col="xs6"></ItemImg>
    </v-dialog>
    <v-dialog v-model="btn_nav.view.henshu" width="700px" @input="close" overflow>
      <Henshu v-if="btn_nav.view.henshu" :item_code="item_code" :item_rev="item_rev"></Henshu>
    </v-dialog>
  </v-app>
</template>

<script>
import itemInfo from "./ItemData/ItemInfo";
import bottomNavAndDialog from "./ItemData/bottomNavAndDialog";
import comScript from "./ItemData/data.js";
import Shukei from "./act/Shukei";
import Henshu from "./ItemData/Henshu";
import ItemImg from "./ItemData/ItemImg";

export default {
  mixins: [comScript],
  components: {
    itemInfo,
    bottomNavAndDialog,
    Shukei,
    Henshu,
    ItemImg
  },
  data: function() {
    return {
      item_code: this.$route.params.item_code,
      item_rev: this.$route.params.item_rev,
      view: false,
      img_path: ""
    };
  },
  created: function() {
    if (this.item_code && this.item_rev) {
      this.img_path =
        "/img/items/" + this.item_code + "/" + this.item_rev + "/";
    }
  },
  methods: {
    viewDialg(target) {
      Object.keys(this.btn_nav.view).forEach(
        (value, index) => (this.btn_nav.view[value] = false)
      );
      this.btn_nav.view[target] = true;
      this.view = true;
    },
    close() {
      this.view = false;
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  margin-bottom: 5rem;
}
* {
  font-size: 1.4rem;
}
#item_dialog {
  width: 90%;
  max-width: 700px;
}
</style>
