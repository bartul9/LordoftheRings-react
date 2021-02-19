import React, { Component } from "react";
import "./Book.css";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { text: false };
    this.revealText = this.revealText.bind(this);
  }

  revealText() {
    this.setState({
      text: !this.state.text,
    });
  }

  render() {
    return (
      <div
        style={
          this.state.text
            ? {
                backgroundImage: "none",
                border: "none",
                backgroundColor: "#10141fd3",
              }
            : {
                backgroundImage: `url(${this.props.image})`,
                color: `rgb(226, 169, 63,0)`,
              }
        }
        onMouseEnter={this.revealText}
        onMouseLeave={this.revealText}
        className="Book"
        // style={{ backgroundImage: `url(${this.props.image})` }}
      >
        <h3
          style={
            this.state.text
              ? { color: "rgb(226, 169, 63)" }
              : { color: "rgb(226, 169, 63,0)" }
          }
        >
          {this.props.name}
        </h3>
        <p>{this.props.description}</p>
        <h6
          style={
            this.state.text
              ? { color: "rgb(226, 169, 63)" }
              : { color: "rgb(226, 169, 63,0)" }
          }
        >
          {this.props.relaese}
        </h6>
      </div>
    );
  }
}
