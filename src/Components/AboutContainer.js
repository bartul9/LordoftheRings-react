import React, { Component } from "react";
import "./AboutContainer.css";
import Message from "./Message";

export default class AboutContainer extends Component {
  render() {
    return (
      <div className="AboutContainer">
        <Message />
      </div>
    );
  }
}
