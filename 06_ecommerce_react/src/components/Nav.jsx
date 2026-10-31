import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className="nav_container">
        <a href="/">
          <img src={require("../assets/logo.png")} alt="logo" />
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
        </ul>
      </div>
    </nav>
  );
}
