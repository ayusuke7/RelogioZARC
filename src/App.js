import React, { Component } from "react";
import ClockZarc from "./ClockZarc";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="container">
        <ClockZarc />
      </div>
    );
  }
}

export default App;
