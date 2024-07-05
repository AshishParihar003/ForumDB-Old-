import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../style.css";
import ForumDELogo from "../assets/new_logo.png";
import { useState } from 'react';

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNavbarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  

  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  return (
    
    <div className="bg-warning-subtle navbar-wrapper">
    <div className="container">
    <nav className="navbar fixed-top navbar-expand-lg bg-light-subtle border border-dark navbar-light">
      <div className="container-fluid">
        {/* Brand Logo (Placeholder) */}
        <a className="navbar-brand" href="/">
          <img className="brand-logo" src={ForumDELogo} alt="Brand Logo" />
        </a>

        {/* Navbar Toggler (for Mobile) */}
        <button className="navbar-toggler" type="button" onClick={handleNavbarToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center-aligned Links & Sign In Button */}
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link px-3" href="/" onClick={handleLinkClick}>Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle px-3"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                  Courses
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/courses/python" onClick={handleLinkClick}>Python</a></li>
                <li><a className="dropdown-item" href="/courses/sql" onClick={handleLinkClick}>SQL</a></li>
                <li><a className="dropdown-item" href="/courses/docker" onClick={handleLinkClick}>Docker</a></li>
                <li><a className="dropdown-item" href="/courses/kubernetes" onClick={handleLinkClick}>Kubernetes</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item disabled" aria-disabled="true" href="#">Upcoming</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item disabled" aria-disabled="true" href="#">Baap Course</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/our-selection" onClick={handleLinkClick}>Our Selection</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/contact-us" onClick={handleLinkClick}>Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/blogs" onClick={handleLinkClick}>Blogs</a>
            </li>
          </ul>
          <a href="https://lms.forumde.in/">
          <button className="btn btn-dark rounded-pill ms-auto" type="button">Login or Sign Up</button></a>
        </div>
      </div>
    </nav>
    </div>
    <hr className="m-0 navbar-line" />
    </div>
  );
}