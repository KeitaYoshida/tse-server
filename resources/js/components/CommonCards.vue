<template>
  <v-card
    :color="card_data[card_name].color"
    :class="card_data[card_name].class_text"
    :to="card_data[card_name].links + '/' + card_name"
    hover
  >
    <v-card-title primary-title>
      <div>
        <div class="headline">{{ card_data[card_name].title }}</div>
        <hr>
        <p v-if="typeof card_data[card_name].text === 'string'">{{ card_data[card_name].text }}</p>
        <p v-else v-for="item in card_data[card_name].text" :key="item.id">{{ item }}</p>
      </div>
    </v-card-title>
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