<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    d: Object
  },
  mounted() {
    this.renderChart(this.d, {
      responsive: true,
      maintainAspectRatio: false
      // legend: {
      //   position: "bottom"
      // },
      // showAllTooltips: true,
      // toolchips: {
      //   enabled: false
      // },
      // fill: false
    });
  },
  created: function() {}
};
</script>