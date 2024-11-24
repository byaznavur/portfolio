import "./footer.scss";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
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
