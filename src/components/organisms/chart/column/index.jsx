import React from "react";
import Chart from "react-apexcharts";


export const ColumnChart = (props) => {
  let index = 0;
  const { maxData, recomendPlace } = props
  if (maxData.length != 0) {
    const state = {
      series: [
        {
          name: 'Sentiment',
          data: [maxData[0].data.value.toFixed(2), maxData[1].data.value.toFixed(2),
          maxData[2].data.value.toFixed(2), maxData[3].data.value.toFixed(2),
          maxData[4].data.value.toFixed(2), maxData[5].data.value.toFixed(2)],
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
            return recomendPlace[index++];
          },
          offsetY: -30,
          offsetX: 0,
          style: {
            fontSize: '11px',
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
            "Accommodation",
            "Entertainment",
            "Food",
            "Restaurant serving",
            "Shopping",
            "Traveling",
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
              Top Places With The Highest Sentiment
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
  return <></>

}

