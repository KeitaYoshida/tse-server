<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-date-picker v-model="dates" multiple locale="ja-jp"
        :day-format="date => new Date(date).getDate()"></v-date-picker>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: function() {
    return {
      dates: [],
      menu: false
    };
  }
};
</script>