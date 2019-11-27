<template>
  <v-app>
    <v-container grid-list-xs>
      <Drag @fileRead="fileRead" v-if="mode === ''"></Drag>
      <Model v-if="mode==='model_entry'" :csv="csv" @clear="clear"></Model>
      <Hatyu v-if="mode==='hatyu_entry'" :csv="csv" :type="type" @clear="clear"></Hatyu>
      <Tyuzan v-if="mode==='tyuzan'" :tyuzan="csv" :type="type" :col="col" @clear="clear"></Tyuzan>
      <Nohin v-if="mode==='nohin_entry'" :csv="csv"></Nohin>
    </v-container>
  </v-app>
</template>

<script>
var iconv = require("iconv-lite");
iconv.skipDecodeWarning = true;
var jschardet = require("jschardet");

import Drag from "./Drag";
import CsvRead from "../CsvRead/CsvRead";
import Model from "./Model/Step";
import Hatyu from "./Hatyu/Step";
import Tyuzan from "./Tyuzan/Tyuzan";
import Nohin from "./Nohin/nohin";

export default {
  components: {
    Drag,
    Model,
    Hatyu,
    Tyuzan,
    Nohin
  },
  data: function() {
    return {
      mode: "",
      csv: null,
      type: "",
      col: ""
    };
  },
  methods: {
    fileRead: function(file) {
      let expansion = file.name.split(".").pop();
      if (expansion === "xlsx") {
        let csv = [];
        let formData = new FormData();
        formData.append("xlsx", file);
        let config = {
          headers: {
            "content-type": "multipart/form-data"
          }
        };
        axios.post("/db/file/xlsx", formData, config).then(res => {
          csv = res.data;
          const TyuzanFirst = "得意先　　　";
          if (csv[0][TyuzanFirst] !== undefined) {
            this.csv = csv;
            this.col = TyuzanFirst;
            this.mode = "tyuzan";
            this.type = "9001";
          }
        });

        return;
      } else if (expansion !== "csv") {
        console.log("file type error: we need csv file");
        return;
      }
      let reader = new FileReader();

      reader.onload = e => {
        let f = e.target.result;
        let enc = jschardet.detect(f).encoding;
        // console.log(enc);
        if (enc === "IBM855") enc = "SHIFT_JIS";
        if (enc === "KOI8-R") enc = "SHIFT_JIS";
        let res = iconv.decode(f, enc, { stripBOM: false });
        const parse = require("csv-parse/lib/es5/sync");
        let csv = parse(res);

        let colNum = 0;

        if (csv.length <= 1) {
          alert("データ行数が足りていません");
          return;
        }

        let topCol = csv[0][0];
        let topVal = csv[1][0];
        let mode_title = "";
        if (topCol === "情報区分" && topVal === "1301") {
          this.csv = csv;
          this.mode = "hatyu_entry";
          this.type = "1301";
        } else if (topCol === "情報区分" && topVal === "1502") {
          this.csv = csv;
          this.mode = "hatyu_entry";
          this.type = "1502";
        } else {
          switch (colNum) {
            case 11:
              this.csv = csv;
              this.mode = "nohin_entry";
              break;
            case 36:
              //data type edp
              this.csv = csv;
              this.mode = "model_entry";
              break;
            case 55:
              //data type tsc1502
              this.csv = csv;
              this.mode = "mesai_entry";
              break;
            case 49:
              //data type tsc1301
              this.csv = csv;
              this.mode = "hatyu_entry";
              break;
            default:
              console.log(colNum);
          }
        }
      };
      reader.readAsBinaryString(file);
    },
    clear() {
      this.mode = "";
      this.csv = [];
    }
  }
};
</script>

<style lang="scss" scoped>
#file_input_expense {
  display: none;
}
</style>