import React, { Component } from "react";
import "./Movies.css";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Movies">
        <h2 className="Movies-name">{this.props.name}</h2>
        <div className="Movies-info">
          {" "}
          {/* <p>Rotten-Tomatoes Score: {this.props.score}</p> */}
          <div className="Movies-stars">
            {" "}
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <p>Runtime: {this.props.runtime} min</p>
          <p>Budget: {this.props.budget} Million $</p>
          <p>Box-Office: {this.props.revenue} Million $</p>
        </div>
      </div>
    );
  }
}
