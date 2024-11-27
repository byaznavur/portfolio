import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "../../logo";
import "./header.scss";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(true);

  let toggleBtn = () => {
    setOpen(!open);
  };
  return (
    <header>
      <nav className="navbar container">
        <div className="logo">
          <Logo />
        </div>
        <a onClick={toggleBtn} className="burgerBtn">
          <GiHamburgerMenu />
        </a>
        <ul className={open ? "" : "show"}>
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
