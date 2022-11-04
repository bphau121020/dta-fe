import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { placeSelector } from "../../../../redux/selectors";

export const LineChart = (props) => {
  const { calData, placeId } = props;
  const placeList = useSelector(placeSelector);
  if (calData[Number(placeId) - 1]) {
    const mean = calData[Number(placeId) - 1].data.mean;
    const std = calData[Number(placeId) - 1].data.std;
    const variance = calData[Number(placeId) - 1].data.var;

    const state = {
      series: [
        {
          name: "Averaged",
          data: [mean.accommodation.toFixed(2), mean.entertainment.toFixed(2), mean.food.toFixed(2),
          mean.restaurant_serving.toFixed(2), mean.shopping.toFixed(2), mean.traveling.toFixed(2)],
        },
        {
          name: "Standard Deviation",
          data: [std.accommodation.toFixed(2), std.entertainment.toFixed(2), std.food.toFixed(2),
          std.restaurant_serving.toFixed(2), std.shopping.toFixed(2), std.traveling.toFixed(2)],
        },
        {
          name: "Variance",
          data: [variance.accommodation.toFixed(2), variance.entertainment.toFixed(2), variance.food.toFixed(2),
          variance.restaurant_serving.toFixed(2), variance.shopping.toFixed(2), variance.traveling.toFixed(2)],
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
            "Accommodation",
            "Entertainment",
            "Food",
            "Restaurant serving",
            "Shopping",
            "Traveling",
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
    return (
      <div>
        <h3 style={{ padding: "10px" }}>
          The Level Of Spread According To The Sentiment Of {placeList[Number(placeId) - 1].data}
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
  return <></>
}

