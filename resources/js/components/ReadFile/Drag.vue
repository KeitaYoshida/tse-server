<template>
  <div
    :class="[{'-drag': isDrag == 'new'}]"
    @dragover.prevent="checkDrag($event, 'new', true)"
    @dragleave.prevent="checkDrag($event, 'new', false)"
    @drop.prevent="onDrop"
    id="select"
    class="elevation-12"
  >
    <div class="drop">
      <p class="display-3 font-weight-black">Ｄｒａｇ ＆ Ｄｒｏｐ</p>
      <p class="display-3 font-weight-black">or</p>
      <label for="corporation_file">
        <v-btn color="primary" outline class="display-3 font-weight-black" @click="select">
          <span>Select File</span>
        </v-btn>
        <input
          type="file"
          ref="file"
          class="drop__input"
          style="display:none;"
          id="corporation_file"
          @change="onDrop"
        >
      </label>
      <p pt-3 class="caption">CSVファイルを選択するかドラッグ＆ドロップしてください</p>
    </div>
  </div>
</template>
 
<script>
export default {
  data: function() {
    return {
      isDrag: null
    };
  },
  methods: {
    select() {
      this.$refs.file.click();
    },
    checkDrag(event, key, status) {
      //★④
      if (status && event.dataTransfer.types == "text/plain") {
        //ファイルではなく、html要素をドラッグしてきた時は処理を中止
        return false;
      }
      this.isDrag = status ? key : null;
    },
    onDrop(e) {
      this.isDrag = null;
      let fileList = event.target.files
        ? event.target.files
        : event.dataTransfer.files; //★①ファイル取得
      // ファイルが無い時は処理を中止
      if (fileList.length == 0) {
        return false;
      }
      let files = [];
      for (let i = 0; i < fileList.length; i++) {
        files.push(fileList[i]);
      }
      this.$emit("fileRead", files[0]);
    }
  }
};
</script>

<style lang="scss" scoped>
#select {
  display: flex; /* 子要素をflexboxで揃える */
  flex-direction: column; /* 子要素をflexboxにより縦方向に揃える */
  justify-content: center; /* 子要素をflexboxにより中央に配置する */
  align-items: center; /* 子要素をflexboxにより中央に配置する */
  width: 80%; /* 見た目用 */
  height: 500px; /* 見た目用 */
  margin: 50px auto;
  text-align: center;
}
.-drag {
  transition-duration: 2s;
  background-color: #e1f5fe;
}
button {
  height: 74px;
}
</style>