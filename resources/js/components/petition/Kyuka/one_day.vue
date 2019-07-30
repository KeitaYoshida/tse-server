<template>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-date-picker
        v-model="dates"
        full-width
        multiple
        locale="ja-jp"
        :day-format="date => new Date(date).getDate()"
      ></v-date-picker>
    </v-flex>
    <v-flex xs12 sm6>
      <template>
        <v-container fluid>
          <v-radio-group v-model="row" row>
            <v-radio label="有給" value="0"></v-radio>
            <v-radio label="慶事休暇" value="1"></v-radio>
            <v-radio label="欠勤" value="2"></v-radio>
          </v-radio-group>
        </v-container>
      </template>
    </v-flex>
    <v-flex xs12 sm6>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="dates"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-combobox
            v-model="dates"
            multiple
            chips
            small-chips
            label="複数選択可"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-combobox>
        </template>
        <v-date-picker v-model="dates" multiple no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = !menu">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
  </v-layout>
</template>
    
<script>
export default {
  data: function() {
    return {
      dates: [],
      menu: false,
      row: 0
    };
  }
  // watch: {
  //   row: () => {
  //     console.log(this.row);
  //   }
  // }
};
</script>