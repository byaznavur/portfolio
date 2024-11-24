import { Link } from "react-router-dom";
import "./home.scss";
const Home = () => {
  return (
    <div className="herro">
      <div className="container herro-wrapper">
        <h1>Hi, I am Abdulaziz</h1>
        <h2>
          I am Junior <span>Front-End</span> Developer
        </h2>
        <p>
          I constantly strive to improve my skills and bring ideas to life
          through real-world projects.
        </p>
        <Link to="./about" href="#about">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
