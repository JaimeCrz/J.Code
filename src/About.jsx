import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";


const About = () => {
    return (
        <div className="ui main container">
          <div className="ui stackable two column grid">
            <div className="column">
              <UndrawDesignerLife primaryColor='#12283a' />
            </div>
            <div className="column">
              <h1 className="ui white inverted header">About</h1>
              <p>
                Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
                corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
                molestias?
              </p>
            </div>
          </div>
        </div>
      );
};

export default About;