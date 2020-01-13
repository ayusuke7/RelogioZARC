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
    const { zarc = [], title, subtitle, today } = this.props;
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
          {zarc.map((it, id) => (
            <>
              {id % 3 === 0 ? <div key={`${id}a`}></div> : null}
              <div
                key={`${id}b`}
                className={"ball " + this.colorChange(it)}
              ></div>
            </>
          ))}
        </div>
        <div className="circle-today">
          {[...Array(36)].map((it, id) => (
            <>
              {id % 3 === 0 ? <div key={`${id}c`}></div> : null}
              <div
                key={`${id}d`}
                className={`ball-today ${id + 1 === today ? "green" : ""}`}
              ></div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default ClockZarc;
