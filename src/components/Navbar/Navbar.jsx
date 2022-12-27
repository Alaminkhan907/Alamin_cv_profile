import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper container" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Alamin</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar">
                Home
              </Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="project">Projects</Link>
            </li>
            <li>
              <Link to="experience">Skills</Link>
            </li>
          </ul>
        </div>
        <Link to="contact">
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
