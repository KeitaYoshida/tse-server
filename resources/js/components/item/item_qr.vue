<template>
  <div flat class="qr-card">
    <table class="qr-info">
      <tr>
        <td colspan="2" class="title">部材識別標</td>
      </tr>
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
      <tr class="qr-add">
        <td class="qrlist-qr">
          <make-qr :config="qrlist.value"></make-qr>
        </td>
        <td class="chk">
          <v-layout row wrap>
            <v-flex xs2 v-for="(item, index) in Array(12).keys()" :key="index">
              <ul>
                <li>
                  {{ item + 1 }}
                  <span>月</span>
                </li>
                <li>&nbsp;</li>
              </ul>
            </v-flex>
          </v-layout>
        </td>
      </tr>
    </table>
  </div>
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
<style lang="scss" scoped>
.qr-card {
  font-size: 10px;
  text-align: center;
  color: #000;
  li {
    list-style: none;
  }
  table.qr-info {
    line-height: 1;
    height: 53.2mm;
    margin-left: 5mm;
    margin-right: 5mm;
    margin-top: 3mm;
    margin-bottom: 3mm;
    .qrlist-list {
      height: 5mm;
    }
    .qr-add {
      height: 24mm !important;
    }
    td {
      &.qrlist-qr {
        padding: 0 !important;
        margin: 0;
      }
      &.title {
        height: 7mm;
        border: 0;
        font-size: 1.2rem !important;
      }
      // border-bottom: 1px solid #bbb;
      border: 1px solid #000;
      &:nth-child(odd) {
        width: 35%;
      }
      &:nth-child(even) {
        width: 65%;
        font-size: 1rem;
      }
      &.qrlist-qr {
        border: 0;
      }
      &.chk {
        border: 0;
        font-size: 0.8rem;
        .layout {
          margin: 0;
          .flex {
            height: 12mm;
            ul {
              padding: 0;
              margin: 0;
              li {
                border: 1px solid #000;
                height: 6mm;
              }
            }
          }
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
