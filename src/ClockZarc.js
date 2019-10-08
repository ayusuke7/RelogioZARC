import React, { Component } from "react";
import "./ClockZarc.scss";

class ClockZarc extends Component {
  pureCircle = () => (
    <>
      <div>{/* Janeiro */}</div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div>{/* Fevereiro */}</div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div>{/* Março */}</div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div>{/* Abril */}</div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div>{/* Maio */}</div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div>{/* Junho */}</div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div>{/* Julho */}</div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div>{/* Agosto */}</div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div>{/* Setembro */}</div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div>{/* Outubro */}</div>
      <div className="ball blue"></div>
      <div className="ball blue"></div>
      <div className="ball blue"></div>
      <div>{/* Novembro */}</div>
      <div className="ball green"></div>
      <div className="ball yellow"></div>
      <div className="ball"></div>
      <div>{/* Dezembro */}</div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
    </>
  );

  colorChange = percentage => {
    if(percentage !== ""){
      
    }
  };

  render() {
    const { title, subtitle, zarc = [] } = this.props;
    const color = "blue";

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
          {this.pureCircle()}
          {/* zarc.map((item, index) => {
            if (index % 4 === 0) 
              return <div></div>;
            else 
            return <div className={"ball " + color}></div>;
          }) */}
        </div>
      </div>
    );
  }
}

export default ClockZarc;
