import React from "react";
import Chart from "react-apexcharts";

const state = {
  series: [
    {
      name: "Averaged",
      data: [1, 2, 3, 5, 4, 2],
    },
    {
      name: "Standard Deviation",
      data: [0, 4, 2, 2, 3, 5],
    },
    {
      name: "Variance",
      data: [2, 3, 4, 1, 3, 3],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [3, 3, 3],
      curve: "smooth",
      dashArray: [0, 0, 0],
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          " : " +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ""
        );
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 5,
      },
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
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
      padding: {
        top: 0,
        right: 20,
        bottom: 0,
        left: 20
      },
    },
  }
};
const LineChart = () => {
  return (
    <div>
      <h3 style={{ padding: "10px" }}>
        The Level Of Spread According To The Sentiment Of A Place
      </h3>
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="100%"
        height="500px"
      />
    </div>
  );
}

export default LineChart;
