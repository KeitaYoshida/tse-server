<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["d"],
  mounted() {
    this.renderChart(this.d, {
      responsive: true,
      maintainAspectRatio: false
    });
  },
  created: function() {}
};
</script>