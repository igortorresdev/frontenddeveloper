import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";
import { faBolt, faBookOpen, faTags } from "@fortawesome/free-solid-svg-icons";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">our library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={faBolt}
              subtitle="Fast and Easy"
              para="Get access to the book you purchased online instantly."
            />
            <Highlight
              icon={faBookOpen}
              subtitle="10.000+ Books"
              para="Library has books in all your favorite categories."
            />
            <Highlight
              icon={faTags}
              subtitle="Affordable"
              para="Get your hands on popular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
