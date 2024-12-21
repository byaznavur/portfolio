import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa6";

import photoMe from "../../assets/about-image/image.png";

import "./about.scss";
import { skills } from "../../data";
import Card from "../../components/card/card";
import { projectData } from "../../data/project-data";
import { Link } from "react-router-dom";

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

        <div className="project-cards">
          {projectData.slice(0, 3).map((el) => (
            <div key={el.id} className="project-card">
              <img src={el.img} alt="" />
              <h3>
                <span>{el.id}</span>.{el.title}
              </h3>
              <div className="project-link">
                <a href={el.link}>Project Link</a>
                <a href={el.github}>Git Hub </a>
              </div>

              <div className="topics">
                {el.topics.map((topic) => (
                  <a key={topic} href="#">
                    #{topic}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link className="allProjectBtn" to="/projects">
          All Projects
        </Link>
      </section>
      <section className="contact">
        <div className="contact-info">
          {" "}
          <h2>Contact Me</h2>
          <p>
            We’d love to hear from you! Whether you have a question about our
            services or want to collaborate, feel free to reach out.
          </p>
          <div className="call-me">
            <div className="call-card">
              <FaTelegram />
              <a
                href="https://t.me/abdukhakimov"
                target="_blank"
                rel="noopener noreferrer"
              >
                @abduhakimov
              </a>
            </div>
            <div className="call-card">
              <FaPhone />
              <a href="tel:+998996882812">+998 99 688 2812</a>
            </div>
          </div>
        </div>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47974.471276952914!2d69.3262521!3d41.278301199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef57d146f4803%3A0x72f4619de5ab1ede!2sYashnobod%20District%2C%20Tashkent%2C%20Tashkent%20Region!5e0!3m2!1sen!2s!4v1732605162736!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
