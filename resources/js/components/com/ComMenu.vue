<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn
        :color="menu.color"
        v-on="on"
        :outline="menu.outline"
        :dark="menu.dark"
        :style="'border-radius:' +  menu.rad"
        :small="menu.small"
      >{{ menu.selected === null ? menu.text : menu.selected }}</v-btn>
    </template>
    <v-list>
      <v-list-tile v-for="(item, index) in menu.value" :key="index" @click="rtVal(item)">
        <v-list-tile-title>{{ item }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: ["prop"],
  components: {},
  data: function() {
    return {
      menu: {
        color: "#3949AB",
        text: "name",
        value: [],
        outline: true,
        dark: true,
        selected: null,
        rad: "5px",
        small: false
      }
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      Object.keys(this.prop).forEach(key => {
        this.menu[key] = this.prop[key];
      });
    },
    rtVal(val) {
      this.menu.selected = val;
      this.$emit("rtVal", val);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
