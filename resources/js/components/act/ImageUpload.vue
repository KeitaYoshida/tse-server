<template>
  <v-container>
    <v-layout text-xs-center wrap class="edit">
      <v-flex xs12 mb-3>
        <v-btn
          color="primary"
          :disabled="isUploading"
          @click="submit"
          id="submit"
        >{{ submit_message }}</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          name="select_image"
          label="画像選択"
          id="select_image"
          color="primary"
          @click="pickFile"
          v-model="upimage.fileName"
          prepend-inner-icon="attach_file"
        ></v-text-field>
        <v-text-field
          name="file_path"
          label="保存先"
          id="seve_dir"
          v-model="upimage.filePath"
          prepend-inner-icon="edit"
          :disabled="path_flg"
          hint="/public/img の下に保存されます(/storage/app/public/img)"
        ></v-text-field>
        <v-text-field
          name="file_name"
          label="ファイル名"
          id="file_name"
          v-model="upimage.setName"
          prepend-inner-icon="fas fa-save"
          :disabled="name_flg"
        ></v-text-field>
        <input
          @change="selectedFile"
          type="file"
          accept="image/jpeg, image/jpg, image/png"
          style="display:none;"
          ref="image"
        >
      </v-flex>
      <v-flex xs12>
        <v-img :src="upimage.fileUrl" aspect-ratio="2" :contain="true" v-if="upimage.fileUrl"></v-img>
      </v-flex>
      <v-flex xs12 v-if="item_clear_flg">
        <ItemImg :path="upimage.filePath"/>
      </v-flex>
    </v-layout>
    <v-dialog v-model="upmessage" max-width="500px" height="300px;" @input="close">
      <v-card pa-2>
        <v-alert type="info" :value="true" outline>
          <span>画像登録処理が完了しました</span>
        </v-alert>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ImageUtil from "./lib/ImageUtil";
import loading64 from "./../../mixins/loading64.js";
import ItemImg from "./../ItemData/ItemImg";

export default {
  mixins: [loading64],
  components: { ItemImg },
  props: ["item_code", "item_rev"],
  data() {
    return {
      isUploading: true, // 画像ファイルアップロード中の判断フラグ
      upimage: {
        fileUrl: "",
        fileName: "",
        blob: null,
        filePath: "",
        setName: "日付時刻 ＋ ランダムな英数値がファイル名として登録されます"
      }, // 画像ファイル
      fileInfo: {
        before: { size: 0 },
        after: { size: 0 }
      },
      upmessage: false,
      submit_message: "登録",
      path_flg: false,
      name_flg: true,
      item_clear_flg: true
    };
  },
  created: function() {
    this.getDefaultpath();
  },
  methods: {
    pickFile() {
      this.$refs.image.click();
    },
    getDefaultpath() {
      if (this.item_code && this.item_rev) {
        this.upimage.filePath =
          "/img/items/" + this.item_code + "/" + this.item_rev + "/";
        this.path_flg = true;
      }
    },

    async selectedFile(e) {
      this.isUploading = true;

      const file = e.target.files[0];
      if (!file) {
        return;
      }

      try {
        // 圧縮した画像を取得
        const compFile = await ImageUtil.getCompressImageFileAsync(file);

        //ファイルサイズの表示
        this.fileInfo.before.size = (file.size / 1024 / 1024).toFixed(4);
        this.fileInfo.after.size = (compFile.size / 1024 / 1024).toFixed(4);
        // 画像情報の設定
        this.upimage.blob = compFile;
        this.upimage.fileUrl = await ImageUtil.getDataUrlFromFile(compFile);
        this.upimage.fileName = file.name;
      } catch (err) {
        // エラーメッセージ等を表示
      } finally {
        this.isUploading = false;
      }
    },
    submit() {
      this.submit_message = "loading ...";
      this.item_clear_flg = false;
      try {
        const d = {};
        d.base64 = this.upimage.fileUrl;
        d.type = this.upimage.blob.type;
        d.item_code = this.item_code;
        d.item_rev = this.item_rev;
        d.path = "/items/";
        axios.post("/upload/items/image", d).then(res => {
          this.upmessage = true;
          this.submit_message = "finish!!";
          this.item_clear_flg = true;
        });
      } catch (err) {
        console.log("er");
        console.log(err);
      }
    },
    close() {
      this.upimage.fileUrl = "";
      this.upimage.fileName = "";
      this.upimage.blob = null;
      this.submit_message = "登録";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
