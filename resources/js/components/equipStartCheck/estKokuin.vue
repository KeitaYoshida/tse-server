<template>
  <v-app>
    <v-container grid-list-xs>
      <h1 class="page-title">
        <v-icon>fas fa-edit</v-icon>刻印機 - 始業点検記録
      </h1>
      <ul>
        <li class="infomation">
          管理番号：
          <span id="kanri-no">ＴＳ２−３９</span>
        </li>
        <li class="infomation">
          手順書番号：
          <span id="work-day">ＭＴ−１３３５</span>
        </li>
        <li class="infomation">
          作業者：
          <span id="work-user">{{ check_list.work_user }}</span>
        </li>
        <li class="infomation">
          日付：
          <span id="work-day">{{ get__hiduke() }}</span>
        </li>
      </ul>
      <table id="chk_info">
        <tr v-for="(item, index) in check_list.nomal" :key="index" @click="ckeck_equip(item)">
          <td class="index">{{ item.index }}</td>
          <td class="chk_name">{{ item.chk_name }}</td>
          <td class="chk_how">{{ item.chk_how }}</td>
          <td class="chk_val">{{ rt_check(item.chk_val) }}</td>
        </tr>
      </table>
      <v-form v-if="check_list.error_flg">
        <h3>不良項目：{{ check_list.error_title }}</h3>
        <v-text-field
          v-for="(item, index) in check_list.error"
          :key="index"
          v-model="item.chk_val"
          :counter="50"
          :label="item.chk_name"
          required
        ></v-text-field>
      </v-form>
      <bottomNav :btn_nav="btn_nav" v-on:pflag="buttomMenu"></bottomNav>
    </v-container>
  </v-app>
</template>

<script>
import bottomNav from "../ItemData/bottomNavAndDialog";
import { assertExpressionStatement, switchCase } from "babel-types";

export default {
  components: {
    bottomNav
  },
  data: function() {
    return {
      btn_nav: {
        view: {
          shukei: false,
          henshu: false,
          ukeire: false
        },
        config: [
          {
            name: "申請",
            code: "shinsei",
            icon: "fas fa-pencil-alt"
          },
          {
            name: "戻る",
            code: "back",
            icon: "fas fa-arrow-alt-circle-left"
          }
          // {
          //   name: "履歴",
          //   code: "hist",
          //   icon: "fas fa-journal-whills"
          // }
        ]
      },
      check_list: {
        nomal: {
          title: {
            index: "NO.",
            chk_name: "点検項目",
            chk_how: "点検方法",
            chk_val: "判定"
          },
          val1: {
            index: "1",
            chk_name: "活字ホイール増し締め",
            chk_how: "付属スパナにて増し締めする（１回／月頭）",
            chk_val: null
          },
          val2: {
            index: "2",
            chk_name: "ファンモータ清掃",
            chk_how: "付属ハケにて清掃（ｴｱﾌﾞﾛｰ厳禁）",
            chk_val: null
          },
          val3: {
            index: "3",
            chk_name: "Ｙ軸テーブル点検",
            chk_how: "目視にて凹み、キズ等確認",
            chk_val: null
          }
        },
        error_flg: false,
        error_title: "",
        error_data_index: null,
        work_user: "未確認",
        error: {
          val1: {
            index: "1",
            chk_code: "er1",
            chk_name: "異常の詳細",
            chk_val: null
          },
          val2: {
            index: "2",
            chk_code: "er2",
            chk_name: "異常処置指示者",
            chk_val: null
          },
          val3: {
            index: "3",
            chk_code: "er3",
            chk_name: "処置の詳細を記入",
            chk_val: null
          },
          val4: {
            index: "4",
            chk_code: "er4",
            chk_name: "処置担当者",
            chk_val: null
          }
        }
      }
    };
  },
  mounted: function() {
    this.preLoad();
  },
  created: function() {},
  methods: {
    rt_check_rt(val) {
      switch (val) {
        case "0":
          return false;
        case "1":
          return true;
        case "-":
          return null;
      }
    },
    rt_check(bool) {
      if (bool === "判定") return bool;
      let rtval = "-";
      if (bool === true) rtval = "OK";
      if (bool === false) {
        rtval = "NG";
      }
      return rtval;
    },
    ckeck_equip(item) {
      var data = this.check_list;
      if (item.chk_val === null) {
        item.chk_val = true;
      } else if (item.chk_val === true) {
        Object.keys(data.nomal).forEach(function(key) {
          if (data.nomal[key].chk_val === false) data.nomal[key].chk_val = null;
        });
        item.chk_val = false;
        data.error_flg = true;
        data.error_title = item.chk_name;
      } else if (item.chk_val === false) {
        item.chk_val = null;
        data.error_flg = false;
      }
    },
    async buttomMenu(val) {
      switch (val) {
        case "shinsei":
          this.entryCheckDate();
          break;
        case "back":
          this.$router.push("/work/equipStartCheck");
          break;
      }
    },
    async entryCheckDate() {
      const comdata = {
        workday: this.get__hiduke(),
        workcode: this.get__workcode(),
        workuser: this.get__username()
      };
      const workdata = [];
      const errordata = [];
      var dataindex = 0;
      var data = this.check_list;
      var erdata = this.check_list.error;
      Object.keys(data.nomal).forEach(function(key) {
        if (key !== "title") {
          workdata.push({
            workday: comdata.workday,
            workcode: comdata.workcode,
            workuser: comdata.workuser,
            code: key,
            val:
              data.nomal[key].chk_val === null ? "-" : data.nomal[key].chk_val
          });
          if (data.nomal[key].chk_val === false) {
            if (!erdata.val1.chk_val) {
              alert("異常の詳細は入力必須項目です");
              return;
            }
            errordata.push({
              detail_error: erdata.val1.chk_val,
              user_order:
                erdata.val2.chk_val === null ? "" : erdata.val2.chk_val,
              user_work:
                erdata.val3.chk_val === null ? "" : erdata.val3.chk_val,
              detail_action:
                erdata.val4.chk_val === null ? "" : erdata.val4.chk_val
            });
            data.error_data_index = dataindex;
          }
          dataindex = dataindex + 1;
        }
      });
      await axios
        .post("/checkdata", workdata)
        .then(console.log("complete job:check data insert/update "))
        .catch(error => {
          const { status, statusText } = error.response;
          alert(
            "データ処理エラー 処理を正常に完了できませんでした\n管理担当者を呼んでください\n\n" +
              `Error! post checkdata HTTP Status: ${status} ${statusText}`
          );
          return;
        });
      if (errordata.length !== 0) {
        await axios
          .post("/checkdata/upid", workdata[data.error_data_index])
          .then(response => {
            errordata[0].checkdata_id = response.data[0].checkdata_id;
            console.log("complete job:get upid");
          })
          .catch(error => {
            const { status, statusText } = error.response;
            alert(
              "データ処理エラー 処理を正常に完了できませんでした\n管理担当者を呼んでください\n\n" +
                `Error! post upid HTTP Status: ${status} ${statusText}`
            );
            return;
          });

        await axios
          .post("/errordata", errordata[0])
          .then(console.log("complete job:error data insert/update "))
          .catch(error => {
            const { status, statusText } = error.response;
            alert(
              "データ処理エラー 処理を正常に完了できませんでした\n管理担当者を呼んでください\n\n" +
                `Error! post errordata HTTP Status: ${status} ${statusText}`
            );
            return;
          });
      }
      this.preLoad();
    },
    async preLoad() {
      var d = this.check_list.nomal;
      var u = this.check_list;
      var rt_func = this.rt_check_rt;
      await axios
        .get(
          "/work/equipStartCheck/" +
            this.get__workcode() +
            "/" +
            this.get__hiduke()
        )
        .then(function(response) {
          if (response.data.length == 0) return;
          response.data.forEach((arr, index) => {
            u.work_user = arr.workuser;
            d[arr.code].chk_val = rt_func(arr.val);
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
li.infomation {
  display: inline-block;
  text-align: left;
  width: 33%;
}
form.v-form {
  width: 90%;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 5rem;
  color: chocolate;
}
</style>
