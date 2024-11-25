import { FaGithub, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa6";
import photoMe from "../../assets/about-image/image.png";
import "./about.scss";
import { skills } from "../../data";
import Card from "../../components/card/card";
const About = () => {
  return (
    <div className="container about">
      <section className="aboutme">
        <h2>Learn more about me</h2>
        <div className="about-info">
          <div className="about-image">
            <img src={photoMe} alt="" />
          </div>
          <div className="about-text">
            <h3>I'm Junior Front-End developer</h3>
            <ul>
              <li>
                <span>Full Name</span>: Abulaziz Abduhakimov
              </li>
              <li>
                <span>City</span>: Tashkent, Uzbekistan
              </li>
              <li>
                <span>Birthday</span>: 28 October 2004
              </li>
              <li>
                <span>Phone Number</span>: +998 99 688 2812
              </li>
              <li>
                <span>Email</span>: az1z.bakht1yarvich@gmail.com
              </li>
              <li>
                <span>Slogan</span>: Never give up
              </li>
            </ul>

            <div className="about-socials">
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
      </section>
      <section className="skills">
        <h2>My Skills</h2>

        <div className="cards">
          {skills.map((el, i) => (
            <Card key={i} {...el} />
          ))}
        </div>
      </section>
      <section className="projects">
        <h2>Projects</h2>
      </section>
      <section className="contact">
        <h2>Contact</h2>
      </section>
    </div>
  );
};

export default About;
