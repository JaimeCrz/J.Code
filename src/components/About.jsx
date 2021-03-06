import React from "react";
import FadeIn from 'react-fade-in';

const About = () => {
  return (
    <FadeIn>
      <div className="ui main container">
        <div id="AboutContent" className="four wide column">
          <h1 id="AboutTitle">About me</h1>
          <p>
            Hello!, my name is Jaime Cruz and I am a Full Stack developer, living in Fristad(Sweden).<br />
          I'm an organized person, problem solver aficionado, constantly enchancing my knowledge in a daily basis to stay updated with the last news of Web Development.<br />
          Also a fan of Computer hardware as well as outdoor activities.<br />
          English speaker along with Spanish/Swedish and few others.<br />
          Interested in the entire spectrum of Web Development and AI Technologies.
          </p>
          <h2 id="AboutTools">Tools & Technologies</h2>
          <h3 id="AboutLanguages">Languages:</h3>
          <ul id="ListLanguages">
            <li>Html5</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>Ruby</li>
          </ul>
          <h3 id="AboutFrameworks"> Frameworks:</h3>
          <ul id="ListFrameworks">
            <li>React.js</li>
            <li>Ruby on Rails</li>
            <li>Node.js</li>
          </ul>
          <h1 id="AboutFindMe"> Find me at:</h1>
          <div id="logos_images" className="ui center aligned container">
            <a id="GitHubLogo" className="image-logo" href="https://github.com/JaimeCrz"><img src="./src/images/gitLogo.png"></img></a>
            <a id="LinkedinLogo" className="image-logo" href="https://se.linkedin.com/in/jaime-cruz-hostalot-29b6a932?trk"> <img src="./src/images/linkedin.png"></img></a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default About;