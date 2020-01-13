import React, { Component } from "react";
import { geolocated } from "react-geolocated";

import "./Bussola.scss";

class Bussola extends Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div>{console.log(this.props.coords)}</div>
    ) : (
      <div>Getting the location data</div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Bussola);
