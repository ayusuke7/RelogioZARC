import React, { Component } from "react";
import moment from "moment";
import ClockZarc from "./ClockZarc";

import "./App.scss";

class App extends Component {
  state = {
    hoje: "2019-10-09",
    zarc: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20,
      20
    ]
  };

  calculate = date => {
    let newDate = date ? moment(date) : moment();
    let month = newDate.month() + 1;
    let day = newDate.date();

    let dateMax = month * 3;

    if (day <= 10) {
      console.log(dateMax - 2);
      return dateMax - 2;
    } else if (day > 10 && day <= 20) {
      console.log(dateMax - 1);
      return dateMax - 1;
    } else {
      console.log(dateMax);
      return dateMax;
    }
  };

  render() {
    const { hoje, zarc } = this.state;

    this.calculate(hoje);

    return (
      <div className="container">
        <ClockZarc
          zarc={zarc}
          title={`HOJE: ${hoje}`}
          subtitle={"faltam 0 dia paras o início do ZARC *"}
          today={this.calculate(hoje)}
        />
      </div>
    );
  }
}

export default App;
