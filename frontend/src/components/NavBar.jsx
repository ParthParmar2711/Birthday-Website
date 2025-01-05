// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo"> SARITA </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <Link to="/pdf-manager">PDFs</Link>
        <li>
          <Link to="/lovenotes">Love Notes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
