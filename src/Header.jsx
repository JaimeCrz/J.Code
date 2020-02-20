import React from "react";
import { NavLink, Link } from "react-router-dom";




const Header = () => {
  return (
    <nav className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/"
        activeStyle={{fontWeight:"bold"}}>

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
            id="contact-tab"
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
            to="/Contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;