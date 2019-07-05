<template>
  <v-alert type="warning" :value="true" outline class="back">
    <v-layout wrap>
      <v-flex xs12>
        <h1>{{ data.title }}</h1>
        <p v-html="data.message" class="message"></p>
      </v-flex>
      <v-flex xs12 class="del-info">
        <v-layout wrap>
          <template v-for="(item, index) in data.data_v2">
            <v-flex xs6 class="mb-2" :key="'title' + index">{{ item[0] }}</v-flex>
            <v-flex xs6 class="mb-2" :key="'column' + index">{{ item[1] }}</v-flex>
          </template>
          <v-flex xs8 offset-xs2 class="mt-4">
            <v-btn color="warning" class="submit-btn" outline @click="submit()">決定</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-alert>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    submit() {
      this.$emit("rt", this.data, true);
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.5rem;
}
.back {
  background-color: #fff;
}
.del-info {
  text-align: center;
}
.submit-btn {
  width: 100%;
}
.message {
  font-size: 0.8rem;
}
</style>
