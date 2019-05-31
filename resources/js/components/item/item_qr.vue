<template>
  <v-card>
    <v-card-title primary-title>部材識別標</v-card-title>
    <table>
      <tr class="qrlist-list">
        <td>品番</td>
        <td>{{ qrlist.id }}</td>
      </tr>
      <tr class="qrlist-list">
        <td>品名</td>
        <td>{{ qrlist.name }}</td>
      </tr>
      <tr class="qrlist-list">
        <td>形式</td>
        <td>{{ qrlist.model }}</td>
      </tr>
      <tr class="qrlist-list">
        <td>管理</td>
        <td>資材 A棚 36-C</td>
      </tr>
      <tr>
        <td colspan="2" class="qrlist-qr">
          <make-qr :config="qrlist.value"></make-qr>
        </td>
      </tr>
    </table>
  </v-card>
</template>

<script>
import makeQr from "../MakeQR.vue";

export default {
  props: ["qrlist", "config"],
  components: {
    makeQr
  }
};
</script>

<style lang="scss" >
#qr-code,
#qr-print {
  .v-card__title--primary,
  .v-card__title {
    display: block;
    padding: 8px 6px;
    padding-left: 15px;
    font-size: 20px;
    text-align: center;
  }
  margin-top: 30px;
  text-align: center;
  .v-toolbar {
    margin-bottom: 15px;
  }
  .v-card {
    border: 1px solid black;
    qrlist-title {
      width: 100%;
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
    }
    table {
      font-size: 19px;
      width: 96%;
      margin-left: 2%;
      margin-bottom: 10px;
      td {
        border: 1px solid #222;
        &.qrlist-list {
          :nth-child(odd) {
            width: 25%;
          }
          :nth-child(even) {
            width: 80%;
          }
        }
        &.qrlist-qr {
          padding-left: 15%;
          padding-right: 15%;
        }
      }
    }
  }
  canvas {
    width: 100%;
    height: auto;
  }
}
</style>
