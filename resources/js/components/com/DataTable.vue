<template>
  <v-layout row wrap>
    <v-flex xs12 v-if="sea">
      <v-text-field name="search" label="検索" id="search" v-model="search"></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-data-table :headers="headers" :items="items" hide-actions :search="search">
        <template v-slot:items="props">
          <td
            class="text-xs-center"
            v-for="(item, index) in headers"
            :key="index"
            @click="click_cell($event, props.item, item.value)"
          >{{ props.item[item.value] }}</td>
        </template>
      </v-data-table>
    </v-flex>
    <v-menu v-model="select_class" :position-y="selectY" :position-x="selectX" offset-y>
      <v-list>
        <v-list-tile
          avatar
          v-for="(item, index) in select_list"
          :key="index"
          @click="select_select(item)"
        >
          <v-list-tile-title>{{ item }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-layout>
</template>

<script>
export default {
  props: {
    items: Array,
    headers: Array,
    sea: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      search: "",
      select_class: false,
      selectX: 0,
      selectY: 0,
      select_list: ["図面", "部材", "CHIP品", "板金", "ネジ・スペーサ"],
      select_list_data: null,
      select_list_tar: "",
      select_target: ""
    };
  },
  created: function() {},
  methods: {
    click_cell(e, d, tar) {
      switch (tar) {
        case "item_class":
          this.select_list_data = d;
          this.select_list_tar = tar;
          this.selectX = e.clientX;
          this.selectY = e.clientY;
          this.select_target = e.target;
          this.select_class = true;
          break;
      }
    },
    select_select(val) {
      this.select_list_data[this.select_list_tar] = val;
      this.select_target.classList.add("change");
    }
  }
};
</script>

<style lang="scss" scoped>
.change {
  transition-duration: 2.5s;
  color: #1a237e;
  background-color: #e8eaf6;
  font-weight: bold;
}
</style>
