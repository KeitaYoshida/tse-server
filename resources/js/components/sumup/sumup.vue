<template>
  <v-app>
    <v-container fluid>
      <v-layout wrap v-if="mode==='def'">
        <v-flex xs6>
          <v-text-field
            :value="search"
            @input="SEARCH_INVENTORY($event)"
            append-icon="search"
            clearable
            autofocus
          ></v-text-field>
        </v-flex>
        <v-flex xs6></v-flex>
        <v-flex xs5>
          <ConstList @act="mode='const'"></ConstList>
        </v-flex>
        <v-flex xs7>
          <ItemList></ItemList>
        </v-flex>
      </v-layout>
      <v-container grid-list-xs v-else-if="mode==='const'">
        <ConstUkeire></ConstUkeire>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ItemList from "@/components/sumup/itemList";
import ConstList from "@/components/sumup/constList";
import ConstUkeire from "@/components/sumup/constUkeire";

export default {
  props: [],
  components: {
    ItemList,
    ConstList,
    ConstUkeire
  },
  data: function() {
    return {
      mode: "def"
    };
  },
  computed: {
    ...mapState({
      search: state => state.search.inventory
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions(["SEARCH_INVENTORY"]),
    init() {}
  }
};
</script>

<style lang="scss" scoped>
</style>