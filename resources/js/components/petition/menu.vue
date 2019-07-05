<template>
  <v-app>
    <v-container grid-list-xs>
      <p id="title">
        <v-icon id="icon" left>fas fa-sticky-note</v-icon>各種申請届
      </p>
      <v-layout row wrap>
        <v-flex md4 xs4 class="test" v-for="(item, index) in page_menu" :key="index" :id="item.id">
          <v-card hover :to="item.to">{{ item.title }}</v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      abc: ["aa", "bb"],
      bbb: {},
      ccc: [],
      page_menu: [
        { id: "test1", to: "/petition/kyuka", title: "休 暇 届" },
        { id: "test2", to: "/petition/kyuka", title: "休日出勤届" },
        { id: "test3", to: "/petition/kyuka", title: "時間外労働届" },
        { id: "test4", to: "/petition/kyuka", title: "出張命令書" },
        { id: "test5", to: "/petition/kyuka", title: "定時・私用外出届" }
      ]
    };
  },
  methods: {
    out() {
      console.log("test");
      let outtest = test => "abc";

      let aaa = (test, tesa) => {
        return test + tesa;
      };
      console.log(aaa(10, 30));
    },
    act() {
      console.log("act");
    }
  }
};
</script>

<style lang="scss" scoped>
.test {
  .v-card {
    text-align: center;
    border: solid;
    padding-top: 50px;
    padding-bottom: 50px;
    color: #089793;
  }
}
#title {
  font-size: 30px;
  border-bottom: dotted 3px black;
}

// #icon {
//   // margin: 0px 5px 10px 0px;
// }
// #test1 {
//   .v-card {
//   text-align: center;
//   padding: 30px;
//   color: #089793;
//   }
// }
// #test2 {
//   .v-card {
//   text-align: center;
//   padding: 30px;

//   color: #089793;
//   }
// }
// #test3 {
//   .v-card {
//   text-align: center;
//   padding: 30px;

//   color: #089793;
//   }
// }
// #test4 {
//   .v-card {
//   text-align: center;
//   padding: 30px;

//   color: #089793;
//   }
// }
// #test5 {
//   .v-card {
//   text-align: center;
//   padding: 30px;

//   color: #089793;
//   }
// }
</style>