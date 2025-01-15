import { LazyLoadImage } from "react-lazy-load-image-component";
import { projectData } from "../../data/project-data";
import "./projects.scss";
// import Projects from "./index";
const Projects = () => {
  return (
    <div className="container project-wrapper">
      <h2>My Projects</h2>

      <div className="project-cards">
        {projectData.map((el) => (
          <div key={el.id} className="project-card">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
              src={el.img}
              alt=""
            />
            <h3>
              <span>{el.id}</span>.{el.title}
            </h3>
            <div className="project-link">
              <a href={el.link}>Project Link</a>
              <a href={el.github}>Git Hub </a>
            </div>
            <p className="desc">{el.desc ? el.desc : ""}</p>
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
    </div>
  );
};

export default Projects;
