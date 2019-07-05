<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["price", "price_all"],
  data: function() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: [],
        datasets: [
          {
            label: "受注金額",
            backgroundColor: "#7986CB",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            //Data to be represented on y-axis
            data: []
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      Object.keys(this.price).forEach((key, index) => {
        this.datacollection.labels[index] = this.rtMonth(key);
        this.datacollection.datasets[0].data[index] = this.price[key];
      });
    },
    rtMonth(name) {
      if (name === "null") return "未分類";
      name = String(name);
      return String(name.slice(-4, -2) + "年" + name.slice(-2) + "月");
    }
  },
  mounted: function() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options);
  },
  watch: {
    price: function() {
      this.init();
    }
  }
};
</script>

