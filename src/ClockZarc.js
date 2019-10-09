import React, { Component } from "react";
import "./ClockZarc.scss";

class ClockZarc extends Component {
  colorChange = percentage => {
    if (percentage > 0 && percentage <= 20) {
      return "blue";
    } else if (percentage > 20 && percentage <= 30) {
      return "yellow";
    } else if (percentage > 30 && percentage <= 40) {
      return "orange";
    } else {
      return "";
    }
  };

  render() {
    const { 
      zarc = [], 
      title, 
      subtitle, 
      today 
    } = this.props;
    console.log(zarc);
    return (
      <div>
        <div className="border">
          <div className="labels">
            <div className="title">{title || ""}</div>
            <div className="subtitle">{subtitle || ""}</div>
          </div>
        </div>
        <div className="circle-months">
          <div>JAN</div>
          <div>FEV</div>
          <div>MAR</div>
          <div>ABR</div>
          <div>MAI</div>
          <div>JUN</div>
          <div>JUL</div>
          <div>AGO</div>
          <div>SET</div>
          <div>OUT</div>
          <div>NOV</div>
          <div>DEZ</div>
        </div>
        <div className="circle-days">
          {zarc.map((item, index) => (
            <>
              {index % 3 === 0 ? <div key={`${index}a`}></div> : null}
              <div key={`${index}b`} className={"ball " + this.colorChange(item)}></div>
            </>
          ))}
        </div>
        <div className="circle-today">
          {[...Array(48)].map((it, id) => (
            <div 
              key={id} 
              className={"ball-today "+(id === today ? "green" : "")}>
            </div>
          ))}
        </div>          
      </div>
    );
  }
}

export default ClockZarc;
