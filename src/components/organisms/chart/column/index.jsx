import React from "react";
import Chart from "react-apexcharts";
import { PLACE } from "../../../../constant"

const ColumnChart = () => {
  let index = 0;
  const state = {
    series: [
      {
        name: 'Sentiment',
        data: [1, 2, 1, 2, 3, 4.8],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) { },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "45%",
          distributed: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function () {
          if (index > 5)
            index = 0;
          return PLACE[index++];
        },
        offsetY: -30,
        offsetX: 0,
        style: {
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          colors: "#ff0014",

        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          "Entertainment",
          "Accommodation",
          "Restaurant serving",
          "Food",
          "Shipping",
          "Shopping",
        ],
        labels: {
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          },
        },

      },
      grid: {
        borderColor: "#f1f1f1",
        padding: {
          top: 30,
          right: 0,
          bottom: 15,
          left: 0
        },
      },
    }
  }

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <h3 style={{ padding: "10px" }}>
            Top 6 Places With The Highest Sentiment
          </h3>
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="100%"
            height="500px"
          />
        </div>
      </div>
    </div>
  );
}

export default ColumnChart;
