import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "../../logo";
import "./header.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false); // boshlang'ich holat: yopiq
  const location = useLocation(); // sahifa o'zgarganda yangi holatni olish

  let toggleBtn = () => {
    setOpen(!open);
  };

  // Sahifa o'zgarganda menyu holatini yopish
  useEffect(() => {
    setOpen(false); // sahifa o'zgarganda menyuni yopamiz
  }, [location]); // `location` o'zgarganda ishlaydi

  return (
    <header>
      <nav className="navbar container">
        <div className="logo">
          <Logo />
        </div>
        <a onClick={toggleBtn} className="burgerBtn">
          <GiHamburgerMenu />
        </a>
        <ul className={open ? "show" : ""}>
          {" "}
          {/* agar `open` true bo'lsa, show klassi qo'shiladi */}
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
