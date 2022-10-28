import React, { Component } from "react";
import Chart from "react-apexcharts";
class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
          width: [5, 7, 5],
          curve: "straight",
          dashArray: [0, 8, 5],
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
            sizeOffset: 6,
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
        },
      },
    };
  }
  render() {
    return (
      <div>
        <h3 style={{ padding: "10px" }}>
          The Level Of Spread According To The Sentiment Of A Place
        </h3>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="100%"
          height="500px"
        />
      </div>
    );
  }
}

export default LineChart;
