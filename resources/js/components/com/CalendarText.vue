<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="sday"
        :label="label"
        prepend-icon="far fa-calendar-alt"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="sday" @input="date_select()"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: ["label", "date"],
  data: function() {
    return {
      sday: new Date().toISOString().substr(0, 10),
      menu: false
    };
  },
  created: function() {
    if (this.date === null) {
      this.sday = null;
    }
    this.date_select();
  },
  methods: {
    date_select() {
      this.$emit("select", this.sday);
      this.menu = false;
    }
  }
};
</script>