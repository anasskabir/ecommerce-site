import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./Rating";
import Price from "./Price";

export default function Book({ book }) {
    


    return (
    <div className="book">
      <a href={`./books/${book.id}`}>
        <figure>
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a href={`./books/${book.id}`} className="book__title--link">
          {book.title}
        </a>
      </div>
      <Rating rating={book.rating}></Rating>
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice}></Price>
    </div>
  );
}
