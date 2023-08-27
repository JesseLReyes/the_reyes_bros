import React, { Component } from 'react';

class CurrentProject extends Component {
  render() {
    return (
      <div className="designers">
        <h2>Current Project</h2>
        <div className="project-card">
          <h3 className="game-title">Hack the World</h3>
          <p className="game-description">
            I have been hacked! You have been hacked! The world has been hacked!
            In this Alternate Reality Game, we make use of the user's phone and
            ingenuity to take them on a mind bending roller coaster ride. This
            mash-up of choose your own adventure and alternate reality immerses
            users on multiple platforms to create a unique gameplay experience.
          </p>
        </div>
      </div>
    );
  }
}

export default CurrentProject;
