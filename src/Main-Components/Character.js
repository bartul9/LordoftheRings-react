import React, { Component } from "react";
import CharacterContainer from "../Components/CharacterContainer";
import "./Character.css";

export default class Character extends Component {
  render() {
    return (
      <div className="Character">
        <h1>Characters</h1>
        <CharacterContainer />
      </div>
    );
  }
}
