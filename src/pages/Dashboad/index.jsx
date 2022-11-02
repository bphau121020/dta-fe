import React from "react";
import CardData from "../../assets/json-data/card.json";
import List from "../../components/organisms/list";
import Navbar from "../../components/templates/nav-bar";
import Card from "../../components/molecules/card";
import Chart from "../../components/organisms/chart";

const Dashboard = () => {
  return <div className="main">
    <div className="container">
      <Navbar />
    </div>
    <div className="main-container">
      <div className="container">
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
        <div className="table-data">
          <List />
        </div>
      </div>
    </div>
  </div>;
};

export default Dashboard;
