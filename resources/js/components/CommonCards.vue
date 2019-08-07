<template>
  <v-card
    :color="card_data[card_name].color"
    :class="card_data[card_name].class_text"
    :to="card_data[card_name].links + '/' + card_name"
    @click="ld()"
    height="100%"
    hover
  >
    <template v-if="loading===false">
      <v-card-title primary-title>
        <div class="headline">{{ card_data[card_name].title }}</div>
        <hr />
      </v-card-title>
      <p v-if="typeof card_data[card_name].text === 'string'">{{ card_data[card_name].text }}</p>
      <p v-else v-for="item in card_data[card_name].text" :key="item.id">{{ item }}</p>
    </template>
    <template v-else>
      <v-progress-circular :size="70" :width="7" indeterminate class="progress"></v-progress-circular>
    </template>
  </v-card>
</template>

<script>
import card_data from "../mixins/CardValueList.js";

export default {
  mixins: [card_data],
  props: ["card_name"],
  data: function() {
    return {
      loading: false
    };
  },
  methods: {
    ld() {
      this.loading = true;
    }
  }
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
.progress {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -35px;
  margin-top: -35px;
  background-color: transparent;
}
</style>
