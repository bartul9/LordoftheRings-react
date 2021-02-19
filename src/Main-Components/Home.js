import React, { Component } from "react";
import "./Home.css";
import Container from "../Components/Container";
import ring from "./ring.png";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header>
          <img
            className="Home-top-image"
            src="https://www.theonering.net/torwp/wp-content/themes/The-One-Ring-2020/img/footer-bg-fellowship.svg"
            alt=""
          />{" "}
          <div className="Home-heading">
            <h1>Lord of the Rings</h1>
            <img className="Home-ring-image rotate" src={ring} alt="" />
          </div>
        </header>
        <Container />
      </div>
    );
  }
}
