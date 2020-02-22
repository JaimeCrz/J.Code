import React from "react";

const About = () => {
  return (
    <div className="ui center aligned grid">
      <div className="six wide column">
        <div className="row">
          <div className="column">
            <h1 className="ui white inverted header">About me</h1>
            <p>
              My name is Jaime Cruz, a newcomer to the realm of coding and web development,
              living in Fristad(Sweden).
                </p>
            <p>
              Thanks to Craft Academy Bootcamp for introducing me
              to full-stack development.
                </p>
            <p>
              I'm an organized person, problem solver aficionado,
              also a fan of Computer hardware as well as outdoor activities.
              English speaker along with Spanish/Swedish and few others.
                </p>
            <p>
              Interested in the entire spectrum of web development and AI Technologies.
                </p>
          </div>

          <div className="column">
            <h1 className="ui white inverted header"> Visit me on:</h1>
            <div className="logos_images">
              <a href="https://github.com/JaimeCrz"><img src="./src/images/gitLogo.png"></img></a>
              <a href="https://se.linkedin.com/in/jaime-cruz-hostalot-29b6a932?trk"><img src="./src/images/linkedin.png"></img></a>
              <img src="src/images/tLogo.png" ></img>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;