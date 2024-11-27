import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "../../logo";
import "./header.scss";
const Header = () => {
  return (
    <header>
      <nav className="navbar container">
        <div className="logo">
          <Logo />
        </div>
        <div className="burgerBtn">
          <GiHamburgerMenu />
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
