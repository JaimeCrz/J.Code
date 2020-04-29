import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <a className="ui card" href={project.link}  id='body-cards'>
        <div className="ui slide masked reveal image">
          <img className="visible content" src={project.image} />
          <div className="hidden content">
            <h3 className="ui header" id='t-cards'>{project.name}</h3>
            <p className="description" id='p-cards'>{project.description}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProjectCard;