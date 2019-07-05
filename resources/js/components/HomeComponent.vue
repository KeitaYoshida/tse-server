<template>
  <v-app light>
    <v-container>
      <h1 class="text-md-center">Welcom to Torks WEB</h1>
      <v-layout row wrap>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="item_list"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="equipStartCheck"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="petition"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="inventory"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="readfile"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="model_mst"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="recept_list"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="product_list"></common-cards>
        </v-flex>
      </v-layout>
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

<style lang="scss" scoped>
h1 {
  margin-top: 80px;
  margin-bottom: 80px;
}
.layout.gadget {
  margin-top: 40px;
}
</style>
