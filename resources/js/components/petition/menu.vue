<template>
  <v-app>
    <v-container grid-list-xs>
      <v-btn color="success" icon @click="out()">
        <v-icon>fas fa-air-freshener</v-icon>
      </v-btn>
      test test {{ abc}}
      <ul>
        <li v-for="(item, index) in abc" :key="index">{{ item }}</li>
      </ul>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      abc: ["aa", "bb"],
      bbb: {},
      ccc: []
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
    }
  }
};
</script>