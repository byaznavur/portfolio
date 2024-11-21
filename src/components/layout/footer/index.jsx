import "./footer.scss";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Logo from "./../../logo/index";
import Button from "../../button/button";
import Form from "../../form/form";
const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="footer-top">
          <div className="footer-logo">
            <Logo />
            <h3>Abdulaziz Programmer</h3>
          </div>
          <div className="footer-link">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skils">Skils</a>
            <a href="#skils">Contact</a>
          </div>
          <form>
            <Form inputValue="Message for me" />
            <Button content="Click" />
          </form>
        </div>

        <div className="footer-bottom">
          <h3>© 2024 Abdulaziz. All rights reserved</h3>

          <div className="footer-social">
            <a href="">
              <FaTelegram />
            </a>
            <a href="">
              {" "}
              <FaYoutube />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
