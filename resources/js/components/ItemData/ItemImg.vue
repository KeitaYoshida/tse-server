<template>
  <v-layout row wrap id="images" v-if="images">
    <v-flex v-for="(image, index) in images" :key="index" :class="col">
      <v-card class="square" @click="view(image)" hover>
        <v-img :src="image.base64" class="content" :lazy-src="loading64"></v-img>
      </v-card>
    </v-flex>
    <template v-if="les_cnt > 0 && etc">
      <v-flex v-for="(n, index) in les_cnt" :key="'no' + index" :class="col">
        <v-card class="square" dark>
          <span class="content">
            <v-icon>fas fa-video-slash</v-icon>
            <span>no image</span>
          </span>
        </v-card>
      </v-flex>
    </template>
    <v-dialog
      v-model="big_img"
      transition="dialog-transition"
      dark
      :width="big_img_width"
      :height="big_img_height"
    >
      <v-toolbar color="primary">
        File
        <v-spacer></v-spacer>
        <v-btn flat dark @click="close">
          <v-icon left>far fa-times-circle</v-icon>
          <span>閉じる</span>
        </v-btn>
        <v-btn flat dark @click="deleteImg">
          <v-icon left>far fa-trash-alt</v-icon>
          <span>削除</span>
        </v-btn>
      </v-toolbar>
      <img :src="big_img_64">
    </v-dialog>
  </v-layout>
</template>

<script>
import Lightbox from "vue-my-photos";
import loading64 from "./../../mixins/loading64.js";

export default {
  mixins: [loading64],
  components: {
    lightbox: Lightbox
  },
  props: {
    path: String,
    col: {
      default: "xs3"
    },
    etc: {
      default: true
    }
  },
  data: function() {
    return {
      img: "",
      images: [],
      les_cnt: 0,
      big_img: false,
      big_img_64: "",
      big_img_name: "",
      big_img_width: "",
      big_img_height: ""
    };
  },
  created: function() {
    this.get_file_list();
  },
  methods: {
    async get_file_list() {
      const get_data = {
        path: this.path
      };
      await axios.post("/upload/check/items", get_data).then(res => {
        if (!res.data) {
          return;
        }
        this.images = res.data;
        this.les_cnt = 4 - this.images.length;
        this.images.forEach(ar => {
          let i = new Image();
          i.src = ar.base64;
          i.onload = () => {
            ar.height = i.height;
            ar.width = i.width;
          };
        });
      });
    },
    view(img) {
      this.big_img = true;
      this.big_img_64 = img.base64;
      this.big_img_name = img.path;
      this.big_img_width = img.width;
      this.big_img_height = img.height;
    },
    close() {
      this.big_img = false;
      this.big_img_64 = "";
      this.big_img_name = "";
      this.big_img_width = "";
      this.big_img_height = "";
    },
    deleteImg() {
      let d = {
        path: this.big_img_name
      };
      axios.post("/upload/delete/items", d).then(res => {
        console.log(res.data);
        this.images = this.images.filter(ar => {
          return ar.path !== this.big_img_name;
        });
        this.close();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#images {
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  .flex {
    padding: 1rem;
    .square {
      position: relative;
      width: 100%;
      // 丸
      // border-radius: 40%;
      // overflow: hidden;
      &::after {
        // ここで高さ比
        padding-top: 100%;
        display: block;
        content: "";
      }
      .content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border: 1px solid black;
        text-align: center;
        // テキストを中央に
        &::before {
          content: "";
          display: inline-block;
          height: 100%;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>

<style lang="scss">
#images {
  .v-dialog {
    width: auto !important;
  }
}
</style>
