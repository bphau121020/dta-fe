import React from "react";
import Card from "./Card/Card";
import CardData from "../../assets/JsonData/Card.json";
import Chart from "./Chart/Chart";
import "./Main.scss";
const Main = () => {
  return (
    <div className="main-layout">
      <div className="card">
        {CardData.map((item, index) => (
          <div className="card-inner" key={index}>
            <Card
              title={item.title}
              value={item.value}
              count={item.count}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
      <div className="chart">
        <Chart />
      </div>
    </div>
  );
};

export default Main;
