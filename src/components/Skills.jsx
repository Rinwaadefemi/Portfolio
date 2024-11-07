import React from "react";
import firstskill from "../images/mobile.png";
import secondskill from "../images/tag.png";
import thirdskill from "../images/carbon--ibm-engineering-test-mgmt.png";
import fourthskill from "../images/cloud servcices.png";

const Skills = () => {
  return (
    <div id="home" className="skills_section">
      <div className="skills_header">
        <h5>My Skills</h5>
        <h2>My Expertise</h2>
      </div>

      <div className="skills_grid">
        <div className="skill_card">
          <img src={firstskill} alt="Responsive Design" />
          <h3>Responsive Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div className="skill_card">
          <img src={secondskill} alt="Front-End Frameworks" />
          <h3>Front-End Frameworks</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div className="skill_card">
          <img src={thirdskill} alt="Testing and Debugging" />
          <h3>Testing and Debugging</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div className="skill_card">
          <img src={fourthskill} alt="Cloud Services" />
          <h3>Cloud Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
