import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/about" className="nav-link">
              <i className="fa-solid fa-vault"></i>
              <span className="link-text">About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/project" className="nav-link">
              <i className="fa-solid fa-worm"></i>
              <span className="link-text">Project</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/sponsor" className="nav-link">
              <i className="fa-solid fa-jet-fighter-up"></i>
              <span className="link-text">Tycho</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              <i className="fa-solid fa-phone"></i>
              <span className="link-text">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
