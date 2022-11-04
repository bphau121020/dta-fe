import React from "react";
const Card = (props) => {
  return (
    <div className="card-content">
      <div className="card-content__items">
        <div className="card-content__items__top">
          <div className="card-content__items__top--left">
            <div className="card-value" style={{ color: props.color }}>{props.value}</div>
            <div className="card-title">{props.title}</div>
          </div>
          <div className="card-content__items__top--right">
            <i className={props.icon}></i>
          </div>
        </div>
        <div style={{
          backgroundImage: props.background, height: '40px', padding: '10px', display: 'flex', flexDirection: 'row',
          borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderRadius: '5px'
        }}>
          <p style={{ width: '30%', color: 'white' }}>% change</p>
          <div className="card-content__items__top--right" style={{ width: '70%', justifyContent: 'end', display: 'flex' }}>
            <i className="bx bx-trending-up" style={{ fontSize: '25px', color: 'white' }}></i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
