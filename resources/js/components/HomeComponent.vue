<template>
  <v-app light>
    <v-container>
      <h1 class="text-md-center">Welcom to Torks WEB</h1>
      <v-layout row wrap>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="item_list"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="accepted"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="marshalling"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="aggregate_const"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="aggregate_etc"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="video_test"></common-cards>
        </v-flex>
      </v-layout>
      <!-- <v-layout class="gadget" row wrap>
        <v-flex xs6>
          <v-calendar></v-calendar>
        </v-flex>
      </v-layout>-->
    </v-container>
  </v-app>
</template>

<script>
import CommonCards from "./CommonCards";

export default {
  components: {
    CommonCards
  }
};
</script>

<style lang='scss'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.container .layout .flex {
  padding: 4px;
}
a:hover {
  text-decoration: none;
}
.v-card {
  .headline {
    text-align: center;
  }
  p {
    font-size: 18px;
    text-align: center;
  }
  div {
    width: 100%;
  }
}
</style>

<style lang="scss" scoped>
h1 {
  margin-top: 80px;
  margin-bottom: 80px;
}
.layout.gadget {
  margin-top: 40px;
}
</style>
