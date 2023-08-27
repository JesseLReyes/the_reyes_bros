import React, { Component } from 'react';

class Designers extends Component {
  render() {
    return (
      <div className="designers">
        <h2>Designers</h2>

        <div className="designers-profile">
          <div className="profile">
            <div id="zak-profile" className="profile-pic"></div>

            <div className="about-context about">
              <span className="profile-name">Zak Reyes - CTO</span>
              <br />
              <span className="profile-about">
                Graduated from TU, loves to rebuild classic consoles.
              </span>
            </div>
          </div>

          <div className="profile">
            <div id="ben-profile" className="profile-pic"></div>
            <div className="about-context about">
              <span className="profile-name">Ben Reyes - CFO</span>
              <br />
              <span className="profile-about">
                When not coding up a storm, Ben runs D&D sessions.
              </span>
            </div>
          </div>

          <div className="profile">
            <div id="jesse-profile" className="profile-pic"></div>

            <div className="about-context about">
              <span className="profile-name">Jesse Reyes - CEO</span>
              <br />
              <span className="profile-about">
                Loves to build! From websites, to games, to mini house, to
                teardrop trailers.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Designers;
