<template >
  <v-layout row wrap class="view_lists">
    <v-flex v-for="(item, index) in target.child" :key="index" xs6 md4 lg3 class="pa-3 zyutyu">
      <v-card flat>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs4>
              <span class="mini">発注No:</span>
            </v-flex>
            <v-flex xs8>{{ item.order_code }}</v-flex>
            <template v-if="item.detail_code">
              <v-flex xs4>
                <span class="mini">明細No:</span>
              </v-flex>
              <v-flex xs8>{{ item.detail_code }}</v-flex>
            </template>
            <v-flex xs4>
              <span class="mini">受注形式:</span>
            </v-flex>
            <v-flex xs8>{{ item.recept_code }}</v-flex>
            <v-flex xs4>
              <span class="mini">工事番号:</span>
            </v-flex>
            <v-flex xs8>{{ item.const_code }}</v-flex>
            <v-flex xs4>
              <span class="mini">受注数:</span>
            </v-flex>
            <v-flex xs8>{{ item.order_num }}</v-flex>
            <v-flex xs4>
              <span class="mini">発注日:</span>
            </v-flex>
            <v-flex xs8>{{ item.day3_irai }}</v-flex>
            <v-flex xs4>
              <span class="mini">指定日:</span>
            </v-flex>
            <v-flex xs8>{{ item.day3_nonyu_shitei }}</v-flex>
            <v-flex xs5>
              <span class="mini">明細発行日:</span>
            </v-flex>
            <v-flex xs7>{{ item.day5hatyu }}</v-flex>
            <v-flex xs5>
              <span class="mini">明細指定日:</span>
            </v-flex>
            <v-flex xs7>{{ item.day5nonyu_yotei }}</v-flex>
            <v-flex xs12>{{ item.recept_name }}</v-flex>
            <v-flex xs12 class="text-xs-center pt-3">
              <v-btn outline small>受注データリンク解除</v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["target"],
  created: function() {
    // console.log(this.target);
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  text-align: center;
}
.zyutyu {
  .v-card,
  .v-btn {
    border: 1px solid #ef6c00;
    color: #ef6c00;
  }
}
.mini {
  font-size: 0.7rem;
}
</style>