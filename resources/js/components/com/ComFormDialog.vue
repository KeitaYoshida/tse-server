<template>
  <v-alert type="info" :value="true" outline class="back">
    <v-layout wrap>
      <v-flex xs12>
        <h1>{{ data.title }}</h1>
        <p v-html="data.message" class="message"></p>
      </v-flex>
      <v-flex xs12 class="del-info">
        <v-layout wrap>
          <template v-for="(item, index) in data.data">
            <v-flex xs12 :key="index">
              <v-text-field
                :name="item.name"
                :label="item.label"
                :id="item.id"
                :hint="item.hint"
                :type="item.type"
                :autofocus="index == 0"
                v-model="item.value"
                v-on:keyup.enter="submit()"
                :disabled="actionflg"
                class="text-field"
              ></v-text-field>
            </v-flex>
          </template>
          <v-flex xs8 offset-xs2 class="mt-4">
            <v-btn color="info" class="submit-btn" outline @click="submit()">Submit</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-alert>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {
        title: null,
        message: null,
        data: [
          {
            name: null,
            label: null,
            id: null,
            hint: null,
            type: null,
            value: null
          }
        ]
      }
    }
  },
  data: function() {
    return {
      actionflg: false
    };
  },
  created: function() {
    this.actionflg = false;
  },
  methods: {
    submit() {
      if (this.actionflg) return;
      this.actionflg = true;
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
