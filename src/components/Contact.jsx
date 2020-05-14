import React from 'react';
import FadeIn from 'react-fade-in';

const Contact = () => {

  return (
    <FadeIn>
      <div className="ui main container">
        <div className="column">
          <h1> Contact me</h1>
          <p>  I'm interested in freelance opportunities, especially for ambitious large projects.
          However, if you have other requests or questions,
          don't hesitate to contact me.
          <p><a href="mailto:info@jaimecruz.dev">Email</a></p>
        </p>
        </div>
      </div>
    </FadeIn>
  );
};

export default Contact