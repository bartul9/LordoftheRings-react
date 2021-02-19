import React, { Component } from "react";
import "./BookContainer.css";
import Book from "./Book";

import books from "../Data/Books";

export default class BookContainer extends Component {
  render() {
    console.log(books);
    return (
      <div className="BookContainer">
        {books.map((book) => (
          <Book
            name={book.name}
            image={book.image}
            description={book.shortDescription}
            relaese={book.released}
          />
        ))}
      </div>
    );
  }
}
