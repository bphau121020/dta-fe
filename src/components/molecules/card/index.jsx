import React from "react";
const Card = (props) => {
  return (
    <div className="card-content">
      <div className="card-content__items">
        <div className="card-content__items__top">
          <div className="card-content__items__top--left">
            <div className="card-title">{props.title}</div>
            <div className="card-value">{props.value}</div>
            <div className="card-update">{props.count}</div>
          </div>
          <div className="card-content__items__top--right">
            <i className={props.icon}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
