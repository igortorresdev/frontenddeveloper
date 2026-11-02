import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <span>My Store</span>
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
