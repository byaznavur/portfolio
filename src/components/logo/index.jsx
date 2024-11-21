import { FaChevronLeft } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa";
import "./logo.scss";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo">
      {" "}
      <span>
        <FaChevronLeft />
      </span>{" "}
      <Link to="/">Ab</Link>
      <span>
        <FaChevronRight />
      </span>
    </div>
  );
};

export default Logo;
