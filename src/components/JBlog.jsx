import React from 'react'

const JBlog = () => {
  return (
    <div className="ui center aligned grid">
      <div className="six wide column">
        <div className="row">

          <div className="column">
            <h1 className="ui white inverted header">Skills</h1>
          </div>

          <div className="column">
            <h1 className="ui white inverted header"></h1>
            <p>
              The main areas of my expertice are Front/ Back end developemnt.
           </p>
            <p>
              HTML,CSS, JS building small and creative webpages with React plus customs pluguins.
           </p>
            <div className="dropping-texts">
              Worked with:
              <div> Ruby</div>
              <div> Ruby on Rails</div>
              <div> JavaScript</div>
              <div> React.js</div>
              <div> HTML5</div>
              <div> CSS3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JBlog;