import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  gridGenerator = cols => {
    return (
      <div className="grid">
        {[...Array(18)].map((it, id) => (
          <div key={id} className="line">
            {[...Array(18)].map((it, id) => (
              <div key={id} className="cell"></div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  spinnerGenerator = () => {
    return (
      <div className="spinner">
        <div className="ball"></div>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="clock">
          {/* this.gridGenerator() */}
          {/* this.spinnerGenerator() */}
        </div>
      </div>
    );
  }
}

export default App;
