import React from "react";
import gitlogo from "../images/GitHub_Invertocat_Light re.png";
import ahusee from "../images/firstimg.png";
import apppp from "../images/secondimg.png";
import easy from "../images/thirdimg.png";
import arrowblack from "../images/arrow black.png";
import arrowgreen from "../images/arrow green.png";

const RecentProject = () => {
  return (
    <div>
      <div id="portfolio" className="projects_section">
        <div className="projects_header">
          <div>
            <h5>Recent Projects</h5>
            <h3>My Portfolio</h3>
          </div>
          <a
            href="https://github.com/Rinwaadefemi"
            className="github_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitlogo} alt="GitHub logo" />
            <p>Visit My GitHub</p>
          </a>
        </div>

        <div className="projects_list">
          <div className="project_item">
            <img src={ahusee} alt="" className="project_image" />
            <h5>Ahuse</h5>
            <p className="project_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <a
              href="https://advice-generator-application-beryl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="view_project_link"
            >
              <p>View Website</p>
              <img src={arrowblack} alt="" />
            </a>
          </div>
          <div className="project_item">
            <img src={apppp} alt="" className="project_image" />
            <h5>App Dashboard</h5>
            <p className="project_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <a
              href="https://github.com/Rinwaadefemi"
              target="_blank"
              rel="noopener noreferrer"
              className="view_project_link"
            >
              <p>View Project</p>
              <img src={arrowgreen} alt="" />
            </a>
          </div>

          <div className="project_item">
            <img src={easy} alt="" className="project_image" />
            <h5>Easy Rent</h5>
            <p className="project_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <a
              href="https://advice-generator-application-beryl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="view_project_link"
            >
              <p>View Website</p>
              <img src={arrowgreen} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
