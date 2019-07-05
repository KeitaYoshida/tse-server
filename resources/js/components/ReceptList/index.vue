<template>
  <v-app id="main">
    <v-container grid-list-xs>
      <transition name="fade">
        <Loading v-if="loading"></Loading>
        <div v-else>
          <h1>受注データ</h1>
          <v-layout row wrap class="pt-3 pb-3">
            <v-flex xs8 offset-xs1>
              総受注金額：{{ price_all.toLocaleString() }}
              <span class="mini">¥</span>
            </v-flex>
            <v-flex xs8 offset-xs1>
              <PriceInfo :price="price" v-if="price"></PriceInfo>
            </v-flex>
          </v-layout>
          <SwitchViewCtrl :check="check" @remakeView="remakeView"></SwitchViewCtrl>
          <v-text-field
            name="search"
            label="検索"
            id="search"
            v-model="search"
            prepend-inner-icon="fas fa-search"
          ></v-text-field>
          <v-data-table
            :headers="headers"
            :items="views"
            item-key="order_code"
            :search="search"
            :rows-per-page-items="[25,50,{'text':'All','value':-1}]"
            :pagination.sync="pagination"
          >
            <template v-slot:items="props">
              <tr @click="viewDetail(props.item)">
                <td class="text-xs-center">
                  <v-chip
                    outline
                    @click.stop="monthSelectView(props.item)"
                    :class="addClassClass(props.item.rcpt_class)"
                  >{{ props.item.ym === null ? '年月' : rtMonth(props.item.ym) }}</v-chip>
                  <v-chip
                    outline
                    :class="addClassClass(props.item.rcpt_class)"
                  >{{ props.item.rcpt_class === null ? '未' : props.item.rcpt_class }}</v-chip>
                  <template v-if="props.item.pdct_id === null">
                    <br />
                    <v-btn
                      color="teal darken-3"
                      class="make_pdct"
                      @click.stop="makeProduct(props.item)"
                      outline
                    >製造データ作成</v-btn>
                  </template>
                  <template v-else>
                    <br />
                    <v-chip
                      outline
                      class="make_pdct maked mt-1"
                      @click.stop="makeProduct(props.item)"
                    >製造ID：{{ props.item.pdct_id }}</v-chip>
                  </template>
                </td>
                <td class="text-xs-center">
                  <p class="order_code">{{ props.item.order_code }}</p>
                  <p
                    class="detail_code"
                  >{{ props.item.detail_code === null ? '-' : props.item.detail_code }}</p>
                </td>
                <td class="text-xs-center">
                  <p class="recept_code">{{ props.item.recept_code }}</p>
                  <p
                    class="customer"
                  >{{ props.item.customer === null ? '-' : props.item.customer.minStr(16) }}</p>
                </td>
                <td class="text-xs-center">
                  <p class="const_code">{{ props.item.const_code }}</p>
                  <p
                    class="recept_name"
                  >{{ props.item.recept_name === null ? '-' : props.item.recept_name.minStr(16) }}</p>
                </td>
                <td class="text-xs-center">
                  <p class="order_num">
                    {{ props.item.order_num }}
                    <span class="mini">EA</span>
                  </p>
                  <p
                    class="nyuka_num"
                    v-if="props.item.nyuka_num !== 0 && props.item.nyuka_num !== null"
                  >
                    {{ props.item.nyuka_num }}
                    <span class="mini">納入済</span>
                  </p>
                  <p class="order_price_one">
                    {{ props.item.order_price_one }}
                    <span class="mini">¥</span>
                  </p>
                </td>
                <td class="text-xs-center">
                  <p>{{ props.item.day3_nonyu_shitei === null ? '-' : props.item.day3_nonyu_shitei }}</p>
                  <p>{{ props.item.day5nonyu_yotei === null ? '-' : props.item.day5nonyu_yotei}}</p>
                </td>
              </tr>
            </template>
          </v-data-table>
        </div>
      </transition>
    </v-container>
    <v-dialog v-model="month" max-width="290px" min-width="290px" transition="dialog-transition">
      <v-date-picker
        v-model="date"
        type="month"
        no-title
        scrollable
        locale="ja-jp"
        :day-format="date => new Date(date).getDate()"
      >
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="changeMonth(date)">OK</v-btn>
      </v-date-picker>
    </v-dialog>
    <v-dialog v-model="detail" max-width="500px" transition="dialog-transition">
      <ReceptDetail :item="item" v-if="detail"></ReceptDetail>
    </v-dialog>
    <v-dialog
      v-model="make"
      scrollable
      hide-overlay
      transition="dialog-bottom-transition"
      width="550px"
    >
      <MakePdct :target="target" v-if="make" @createPdct="createPdct"></MakePdct>
    </v-dialog>
  </v-app>
</template>

<script>
import Loading from "./../com/Loading";
import ReceptDetail from "./../ReadFile/ReceptDetail";
import PriceInfo from "./PriceInfo";
import SwitchViewCtrl from "./SwitchViewCtrl";
import MakePdct from "./MakePdct";

export default {
  components: {
    Loading,
    ReceptDetail,
    PriceInfo,
    SwitchViewCtrl,
    MakePdct
  },
  data: function() {
    return {
      search: "",
      detail: false,
      item: null,
      loading: true,
      items: null,
      views: null,
      make: false,
      target: null,
      date: "",
      month: false,
      menu: false,
      price: {},
      price_all: 0,
      headers: [
        { text: "受注区分", value: "rcpt_class", align: "center" },
        { text: "発注・明細番号", value: "order_code", align: "center" },
        { text: "受注形式・取引先", value: "recept_code", align: "center" },
        { text: "工事番号・品名", value: "const_code", align: "center" },
        {
          text: "台数・単価",
          value: "recept_name",
          align: "center",
          sortable: false
        },
        {
          text: "納入指定日・予定日",
          value: "day3_nonyu_shitei",
          align: "center",
          sortable: false
        }
      ],
      pagination: {
        sortBy: "recept_code",
        descending: false
      },
      check: {
        buhin: true,
        shuri: true,
        seihin: true,
        mi: true,
        etc: true,
        pro: true,
        nopro: true
      }
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      axios.get("/db/recept/tyuzan/data/").then(res => {
        this.items = res.data;
        this.remakeView();
        this.loading = false;
      });
    },
    rtMonth(name) {
      if (name === "all") return "受注総額";
      if (name === "null") return "未分類";
      name = String(name);
      return String(name.slice(-4, -2) + "年" + name.slice(-2) + "月");
    },
    makeProduct(item) {
      this.make = !this.make;
      this.target = item;
    },
    viewDetail(item) {
      this.item = item;
      this.detail = true;
    },
    addClassClass(val) {
      let addClass = "";
      switch (val) {
        case "部品":
          addClass = "buhin";
          break;
        case "修理":
          addClass = "shuri";
          break;
        case "製品":
          addClass = "seihin";
          break;
        case "他":
          addClass = "etc";
          break;
        case "未":
          addClass = "enough";
          break;
      }
      return addClass;
    },
    remakeView(c = this.check) {
      let i = this.items;
      let v = [];
      let p = (this.price = {});
      let all = (p.null = 0);
      i.forEach((ar, index) => {
        if (c.buhin === false) {
          if (ar.rcpt_class === "部品") return;
        }
        if (c.shuri === false) {
          if (ar.rcpt_class === "修理") return;
        }
        if (c.seihin === false) {
          if (ar.rcpt_class === "製品") return;
        }
        if (c.mi === false) {
          if (ar.rcpt_class === null) return;
        }
        if (c.etc === false) {
          if (ar.rcpt_class === "他") return;
        }
        if (c.pro === false) {
          if (ar.pdct_id !== null) return;
        }
        if (c.nopro === false) {
          if (ar.pdct_id === null) return;
        }
        let zan_price = (ar.order_num - ar.nyuka_num) * ar.order_price_one;
        all = all + zan_price;
        if (ar.ym in p === false) {
          p[ar.ym] = 0;
        }
        p[ar.ym] = p[ar.ym] + zan_price;
        v.push(ar);
      });
      this.price_all = all;
      this.views = v;
    },
    createPdct(id = false) {
      if (id !== false) {
        this.target.pdct_id = id;
      }
      this.make = false;
      this.target = null;
    },
    changeMonth(d) {
      let sDate = d.slice(-5, -3) + d.slice(-2);
      let i = this.item;
      i.ym = sDate;
      this.remakeView();
      this.month = !this.month;
      axios.get(
        "/db/recept/oneupdate/" + i.recept_id + "/" + "ym" + "/" + sDate
      );
    },
    monthSelectView(item) {
      this.item = item;
      this.month = !this.month;
    }
  }
};
</script>

<style lang="scss" scoped>
#main {
  h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0;
  }
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
.order_code {
  font-size: 1rem;
}
.detail_code {
  font-size: 1rem;
}
.const_code {
  font-size: 1.2rem;
}
.recept_code {
  font-size: 1.2rem;
}
.recept_name {
  font-size: 0.8rem;
}
.customer {
  font-size: 0.7rem;
}
.order_num {
  font-size: 1rem;
}
.nyuka_num {
  font-size: 1rem;
}
.order_price_one {
  font-size: 1rem;
}
.mini {
  font-size: 0.5rem;
}
.v-chip {
  font-size: 0.9rem;
  margin: 0;
  border-radius: 5px;
}
.v-chip.v-chip.v-chip--outline {
  height: 24px;
}
.v-chip.buhin {
  border-color: #4e342e;
  color: #4e342e;
}
.v-chip.shuri {
  border-color: #ef6c00;
  color: #ef6c00;
}
.v-chip.seihin {
  border-color: #283593;
  color: #283593;
}
.v-chip.etc {
  border-color: #2e7d32;
  color: #2e7d32;
}
.v-chip.enough {
  border-color: #37474f;
  color: #37474f;
}
.make_pdct {
  font-size: 0.9rem;
  padding: 0 0.5rem;
  height: 24px;
  border-radius: 5px;
  &.maked {
    border-color: #283593;
    color: #283593;
  }
}
</style>
