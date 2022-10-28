import React, { Component } from "react";
import Chart from "react-apexcharts";

class ColumnChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [1, 2, 1, 2, 3, 5],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
          events: {
            click: function (chart, w, e) {},
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (s) {
            return "Thanh Khe";
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
              fontSize: "12px",
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <h3 style={{ padding: "10px" }}>
              Top 6 Places With The Highest Sentiment
            </h3>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height="500px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ColumnChart;
