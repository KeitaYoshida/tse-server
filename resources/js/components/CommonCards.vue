<template>
  <v-card
    :color="card_data[card_name].color"
    :class="card_data[card_name].class_text"
    :to="card_data[card_name].links + '/' + card_name"
    hover
  >
    <v-card-title primary-title>
      <div class="headline">{{ card_data[card_name].title }}</div>
      <hr>
    </v-card-title>
    <p v-if="typeof card_data[card_name].text === 'string'">{{ card_data[card_name].text }}</p>
    <p v-else v-for="item in card_data[card_name].text" :key="item.id">{{ item }}</p>
    <v-card-actions v-if="card_data[card_name].button">
      <router-link :to="card_data[card_name].links & '/' & card_name">
        <v-btn flat dark outline>{{ card_data[card_name].button_text }}</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import card_data from "../mixins/CardValueList.js";

export default {
  mixins: [card_data],
  props: ["card_name"]
};
</script>

<style lang="scss" scoped>
.v-card {
  padding-bottom: 3rem;
}
.headline {
  font-size: 1.3rem !important;
}
p {
  width: 80%;
  margin: 0 auto;
  font-size: 0.9rem;
  text-align: center;
}
</style>
