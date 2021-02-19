import React, { Component } from "react";
import "./Container.css";
import axios from "axios";
import Movies from "./Movies";
import Message from "./Message";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      active: false,
      videos: [
        "SDnYMbYB-nU",
        "fnaojlfdUbs",
        "iVAgTiBrrDA",
        "hYcw5ksV8YQ",
        "V75dMMIW2B4",
        "r5X-hFf6Bwo",
      ],
    };
    this.fetchData = this.fetchData.bind(this);
    this.changeActive = this.changeActive.bind(this);
  }

  async fetchData() {
    const movies = await axios.get("https://the-one-api.dev/v2/movie", {
      headers: { Authorization: `Bearer ${"9xc-nEAjaOlSvV8iSCfU"}` },
    });
    console.log(movies);
    this.setState({
      movies: movies.data.docs,
    });
  }

  changeActive() {
    this.setState({
      active: !this.state.active,
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="Container">
        {this.state.movies
          .slice(2, this.state.movies.length)
          .map((movie, i) => {
            return (
              <Movies
                name={movie.name}
                runtime={movie.runtimeInMinutes}
                score={movie.rottenTomatesScore}
                budget={movie.budgetInMillions}
                revenue={movie.boxOfficeRevenueInMillions}
                image={this.state.videos[i]}
              />
            );
          })}
      </div>
    );
  }
}
