import React, { Component } from "react";
import ClockZarc from "./ClockZarc";
import moment from "moment";

import "./App.scss";

const now = moment().format("YYYY-MM-DD")

class App extends Component {
  state = {
    hoje: now,
    zarc: [
      0,0,0, 
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,20,
      20,20,20,
      20,20,20,
      20,20,20
    ]
  };


  calculate = (month, day) => {
    
  }

  render() {
    const { hoje, zarc } = this.state;
    return (
      <div className="container">
        <ClockZarc
          zarc={zarc}
          title={`HOJE: ${hoje}`}
          subtitle={"faltam 0 dia paras o início do ZARC *"}
          today={37}
        />
      </div>
    );
  }
}

export default App;
