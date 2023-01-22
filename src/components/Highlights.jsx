import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./UI/highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why chose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt"></FontAwesomeIcon>}
              title="Easy and Quick"
              para="Get Acces to the book you purchased online instantly."
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="book-open"></FontAwesomeIcon>}
              title="10,000+ Books"
              para="Library has books in all your favorite categories"
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="tags"></FontAwesomeIcon>}
              title="Affordable"
              para="Get your hands on popular books for as little as $10"
            ></Highlight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
