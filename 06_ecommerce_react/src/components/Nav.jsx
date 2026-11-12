import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faX } from "@fortawesome/free-solid-svg-icons";
import LibraryLogo from "../assets/library.svg";

export default function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={LibraryLogo} alt="logo" />
        </a>
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
          <li className="nav__icon">
            <a href="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="cart__length">0</span>
            </a>
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close">
            <FontAwesomeIcon icon={faX} />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a className="menu__link" href="/">Home</a>
            </li>
            <li className="menu__list">
              <a className="menu__link" href="/products">Books</a>
            </li>
            <li className="menu__list">
              <a className="menu__link" href="/cart">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
