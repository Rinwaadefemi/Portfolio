import React from "react";
import aboutImage from "../images/about me.png";

const About = () => {
  return (
    <div>
      <div id="about" className="about_pic">
        <img src={aboutImage} alt="" />
        <div className="aboutinfo">
          <h5>About</h5>
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque.
          </p>
          <p>
            Sit turpis pretium eget maecenas. Vestibulum dolor mattis
            consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
            mi a, euismod risus r.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
