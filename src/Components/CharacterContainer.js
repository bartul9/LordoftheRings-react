import React, { Component } from "react";
import "./CharacterContainer.css";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default class CharacterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    const characters = await axios.get("https://the-one-api.dev/v2/character", {
      headers: { Authorization: `Bearer ${"9xc-nEAjaOlSvV8iSCfU"}` },
    });

    this.state = {
      characters: { ...characters.data.docs },
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="CharacterContainer">
        {this.state.characters.map((card) => {
          console.log(card);
          return <CharacterCard name={card.name} />;
        })}
      </div>
    );
  }
}
