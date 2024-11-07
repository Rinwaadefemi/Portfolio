import React, { useState } from "react";
import { Link } from "react-scroll";
import navLogo from "../images/logofinalnew.png";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <nav
        id="nav"
        className={`navbar-container ${menuVisible ? "expanded" : ""}`}
      >
        <Link to="footer" smooth={true} duration={500} className="logo-link">
          <img src={navLogo} alt="SiteLogo" />
          <h4>RinwaDev.</h4>
        </Link>

        <div className="menu-toggle" onClick={handleMenuToggle}>
          <p className={`line line-top ${menuVisible ? "expanded" : ""}`}></p>
          <p
            className={`line line-middle ${menuVisible ? "expanded" : ""}`}
          ></p>
          <p
            className={`line line-middle2 ${menuVisible ? "expanded" : ""}`}
          ></p>
          <p
            className={`line line-bottom ${menuVisible ? "expanded" : ""}`}
          ></p>
        </div>

        <div className={`nav-links ${menuVisible ? "visible" : ""}`}>
          <Link to="head" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
          <Link to="about" smooth={true} duration={500}>
            About me
          </Link>
          <Link to="testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
        </div>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="contact-link"
        >
          <button>Contact me</button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
