import React from 'react';
import FadeIn from 'react-fade-in';
import { Segment } from 'semantic-ui-react'

const Contact = () => {

  return (
    <FadeIn>
      <div className="ui main container">
        <div className="column">
          <h1> Contact me</h1>
          <p>  I'm currently available for a full-time employment, can start with short notice and can work remotely if required. <br /> 
          I look forward to meeting you and don't hesitate to contact me if you have other requests or questions.
          <p><a className="image-logo" href="mailto:info@jaimecruz.dev"> <img src="src/images/email.png" /> </a></p>
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

export default Contact