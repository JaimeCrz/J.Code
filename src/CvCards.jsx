import React from "react";

const CvCards = ({ curriculum }) => {
  return (
    <>
      <div className="ui card">
        <div className="image">
          <img src={curriculum.image} />
        </div>
        <div className="content">
          <h3 className="ui header">{curriculum.name}</h3>
          <div className="description">{curriculum.description}</div>
        </div>
      </div>
    </>
  );
};

export default CvCards;