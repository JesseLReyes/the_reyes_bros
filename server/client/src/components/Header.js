import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="the-reyes-bros-logo">
          <h1 className="the-reyes-bros-logo-text">
            The Reyes Bros <i class="fa-solid fa-gamepad"></i>
          </h1>
        </div>

        <div className="slogan">
          <h2>Game devs for fun in free time.</h2>
        </div>
      </div>
    );
  }
}

export default Header;
