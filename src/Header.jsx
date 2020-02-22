import React from "react";
import { NavLink, Link } from "react-router-dom";

// Curriculum is positioned on a wrong side, it'll be deleted once  review.


const Header = () => {
  return (
    <nav className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/"
          activestyle={{ fontWeight: "bold" }}>

          J. Cruz
  
        </Link>
        <div className="right menu">
          <NavLink
            id="about-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            id="skills-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/skills"
          >
            Skills
          </NavLink>

          <NavLink
            id="projects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/projects"
          >
            Projects
          </NavLink>

          <NavLink
            id="contact-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/contact"
          >
            Contact
          </NavLink>

          <NavLink
            id="cv-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/cv"
          >
            Curriculum
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;