import React from "react";
import headerprofile from "../images/profile picture.png";

const Header = () => {
  return (
    <div>
      <header>
        <div id="head" className="intro_content">
          <h4>Hey, I am Rinwa</h4>
          <h1>I develop dynamic and User-Centered Web Applications</h1>
          <p>
            My expertise spans both front-end and back-end development, enabling
            me to build comprehensive solutions that meet diverse client needs.
          </p>
          <div className="intro_button">
            <button>Get in touch</button>
          </div>
        </div>
        <div className="intro_image">
          <img src={headerprofile} alt="Profile" />
        </div>
      </header>
    </div>
  );
};

export default Header;
