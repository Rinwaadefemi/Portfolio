import React from "react";
import navLogo from "../images/logofinalnew.png";
import { Link } from "react-scroll";
import facebook from "../images/FacebookNew.png";
import instagram from "../images/Instagramnew.png";
import twitter from "../images/Twitternewpng.png";
import linkedin from "../images/LinkedInnew.png";

const Footer = () => {
  return (
    <div>
      <footer id="foot" className="footer_section">
        <div className="footer_top">
          <Link to="nav" smooth={true} duration={500} className="nav_link">
            <img src={navLogo} alt="" />
            <h4>RinwaDev.</h4>
          </Link>

          <div className="footer_middle">
            <Link to="head">Home</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="about">About me</Link>
            <Link to="contact">Contact</Link>
            <Link to="testimonials">Testimonials</Link>
            <Link to="portfolio">Portfolio</Link>
          </div>

          <div className="footer_social">
            <a href="" target="blank" rel="noopener noreferrer">
              <img src={facebook} alt="" />
            </a>
            <a
              href="https://x.com/rinwaadefemi"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="" />
            </a>
            <a
              href="https://www.instagram.com/rinwaadefemi/?next=%2F&hl=en"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/rinwa-adefemi-9967a315b/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>

        <hr />

        <div className="footer_bottom">
          <div>
            <p>Made with 💖 by Rinwa</p>
          </div>
          <div className="footer_links">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
