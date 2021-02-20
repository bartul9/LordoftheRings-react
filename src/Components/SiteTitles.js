import React, { Component } from "react";
import "./SiteTitles.css";

export default class SiteTitles extends Component {
  render() {
    return (
      <div className="SiteTitles">
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}
