<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["d"],
  mounted() {
    this.renderChart(this.d, {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom"
      },
      showAllTooltips: true,
      toolchips: {
        enabled: false
      }
    });
  },
  created: function() {}
};
</script>