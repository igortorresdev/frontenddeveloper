import React from "react";
import LibraryLogo from "../assets/library.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
            <figure className="footer__logo">
              <img className="footer__logo--img" src={LibraryLogo} alt="" />
            </figure>
          </a>
          <div className="footer__list">
            <a className="footer__link" href="/">Home</a>
            <a className="footer__link no-cursor" href="">About</a>
            <a className="footer__link" href="/books">Books</a>
            <a className="footer__link" href="/cart">Cart</a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2026 Library
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;