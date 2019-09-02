<template>
  <v-layout row wrap>
    <v-flex
      xs6
      md4
      lg3
      v-for="(item, index) in target.product.workdata"
      :key="index"
      class="pa-3 workdata"
    >
      <v-card flat>
        <v-card-title primary-title>
          <v-chip small color="#3949ab" dark>{{ item.class.val }}</v-chip>
          <v-chip small color="#3949ab" dark>{{ item.status.val }}</v-chip>
          <br />
          <v-chip small color="#3949ab" dark>{{ item.model.model_code }}</v-chip>
          <v-chip small color="#3949ab" dark>{{ item.model.model_rev.numToRev() }}</v-chip>
          <v-chip
            small
            color="#3949ab"
            dark
            v-if="item.status.model_code_ne"
          >{{ item.status.model_code_ne }}</v-chip>
          <v-chip
            small
            color="#3949ab"
            dark
            v-if="item.status.model_name"
          >{{ item.status.model_name }}</v-chip>
        </v-card-title>
        <v-card-text>
          <v-chip outline color="#3949ab">{{ item.worklist_code }}</v-chip>
          <v-chip outline color="#3949ab">{{ item.num }} EA</v-chip>
          <v-chip outline color="#3949ab">{{ item.st_day }} ~ {{ item.ed_day }}</v-chip>
          <v-chip outline color="#3949ab">起工氏: {{ item.user }}</v-chip>
        </v-card-text>
        <v-card-actions class="text-xs-center">
          <v-btn color="#3949ab" flat style="width:100%;font-size:1.3rem;">製造</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs6 md4 lg3 class="pa-3 other">
      <v-card class="add_button" flat height="100%">
        <v-btn outline dark large @click="selectModel=!selectModel">起工</v-btn>
      </v-card>
    </v-flex>
    <v-dialog v-model="selectModel" max-width="680px" v-if="selectModel">
      <MakeWorkdata></MakeWorkdata>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import MakeWorkdata from "./MakeWorkdata";

export default {
  props: [],
  components: {
    MakeWorkdata
  },
  data: function() {
    return {
      selectModel: false
    };
  },
  computed: {
    ...mapState({
      target: "target"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    init() {}
  }
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
.v-card {
  text-align: center;
}
.other {
  min-height: 200px;
  .v-card {
    background-color: #3949ab;
    color: #fff;
  }
}
.workdata {
  .v-card {
    border: 1px solid #3949ab;
    color: #3949ab;
  }
}
.add_button {
  button {
    position: absolute;
    top: 45%;
    left: 48%;
    transform: translateY(-50%) translateX(-50%);
  }
}
.v-card__title {
  padding: 0;
  font-size: 0.9rem;
  .v-chip {
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 5px;
  }
}
.v-card__title--primary {
  padding: 0;
}
.v-card__actions {
  .v-btn {
    font-size: 0.8rem;
    color: #1b5e20;
  }
}
.v-chip.v-chip.v-chip--outline.chip {
  border-radius: 5px;
}
</style>
