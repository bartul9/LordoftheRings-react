import React, { Component } from "react";
import "./CharacterCard.css";

export default class CharacterCard extends Component {
  render() {
    return (
      <div className="CharacterCard">
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}
