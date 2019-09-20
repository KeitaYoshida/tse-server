<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["d"],
  mounted() {
    this.renderChart(this.d, {
      responsive: true,
      maintainAspectRatio: false,
      //軸の設定
      scales: {
        //縦軸の設定
        yAxes: [
          {
            //目盛りの設定
            ticks: {
              //開始値を0にする
              beginAtZero: true
            }
          }
        ]
      }
    });
  }
};
</script>