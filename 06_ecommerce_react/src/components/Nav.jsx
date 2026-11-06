import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LibraryLogo from "../assets/library.svg";

export default function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <img src={LibraryLogo} alt="logo" />
        <ul className="nav__links">
          <li className="nav__list">
            <a className="nav__link" href="/">Home</a>
          </li>
          <li className="nav__list">
            <a className="nav__link" href="/products">Books</a>
          </li>
          <button className="btn__menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </ul>
      </div>
    </nav>
  );
}
