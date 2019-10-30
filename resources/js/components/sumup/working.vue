<template>
  <div>test</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Axios from "axios";

export default {
  props: [],
  components: {},
  data: function() {
    return {};
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
    async init() {
      let list = await axios.get("/db/inventory/working/const/list");
      console.log(list.data);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
