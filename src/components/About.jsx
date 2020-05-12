import React from "react";

const About = () => {
  return (
    <div className="ui main container">
      <div className="four wide column">
        <h1>About me</h1>
        <p>
          My name is Jaime Cruz, a newcomer to the realm of coding and web development,
          living in Fristad(Sweden).<br />
          Thanks to Craft Academy Bootcamp for introducing me
          to full-stack development.<br />
          I'm an organized person, problem solver aficionado,
          also a fan of Computer hardware as well as outdoor activities.<br />
          English speaker along with Spanish/Swedish and few others.<br />
          Interested in the entire spectrum of web development and AI Technologies.
        </p>
        <h1> Visit me on:</h1>
        <div id="logos_images" className="ui center aligned container">
          <a className="image-logo" href="https://github.com/JaimeCrz"><img src="./src/images/gitLogo.png"></img></a>
          <a className="image-logo" href="https://se.linkedin.com/in/jaime-cruz-hostalot-29b6a932?trk"> <img src="./src/images/linkedin.png"></img></a>
        </div>
      </div>
    </div>
  );
};

export default About;