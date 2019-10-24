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
          <v-chip small color="#5C6BC0" dark>{{ item.class.val }}</v-chip>
          <v-chip
            small
            :outline="rtOutline(item.status)"
            :class="rtClass(item.status)"
            dark
          >{{ item.status.val }}</v-chip>
          <br />
        </v-card-title>
        <v-card-text class="mb-0 pb-0">
          <p class="workdata_text">{{ item.status.model_code_ne || item.model.model_code }}</p>
          <p class="workdata_text">{{ item.worklist_code }}</p>
          <p class="workdata_text mini">{{ item.num }} EA</p>
        </v-card-text>
        <v-card-actions class="text-xs-center">
          <v-btn flat class="btn-make half" :to="'/process/' + item.worklist_id">製造</v-btn>
          <v-btn
            flat
            class="btn-delete half"
            @click="deleteWorkList(item)"
            :disabled="item.worklist_status!==0"
          >取消</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs6 md4 lg3 class="pa-3 other">
      <v-card class="add_button" flat height="100%">
        <v-btn outline dark large @click="selectModel=!selectModel">起工</v-btn>
      </v-card>
    </v-flex>
    <v-dialog v-model="selectModel" max-width="680px" v-if="selectModel" persistent>
      <MakeWorkdata @clearDialog="clearDialog"></MakeWorkdata>
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
    init() {},
    deleteWorkList(item) {
      let n = this.target.product.workdata.indexOf(item);
      this.target.product.workdata.splice(n, 1);
      axios.get("/db/workdata/delete/const/" + item.worklist_id);
    },
    rtOutline(d) {
      return d.worklist_status === 2 ? false : true;
    },
    rtClass(d) {
      let cl = "";
      switch (d.worklist_status) {
        case 0:
          break;
        case 1:
          cl = "indigo--text text--lighten-1";
          break;
        case 2:
          cl = "indigo lighten-1";
          break;
      }
      return cl;
    },
    clearDialog() {
      this.selectModel = !this.selectModel;
    }
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
    background-color: #5c6bc0;
    color: #fff;
  }
}
.workdata {
  .v-card {
    border: 1px solid #5c6bc0;
    color: #5c6bc0;
  }
  .workdata_text {
    color: "#5C6BC0";
    font-size: 1.5rem;
    &.mini {
      font-size: 1.2rem;
    }
  }
  .v-btn {
    &.half {
      width: 50%;
      font-size: 1.3rem;
    }
    &.btn-make {
      color: #5c6bc0;
    }
    &.btn-delete {
      color: #ffa726;
    }
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
