import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className='card'>
      <div className='card-wrapper'>
        <div className='card-header'>
          <h3>{project.title}</h3>
        </div>
        <div className='card-body'>
          <p>{project.details}</p>
        </div>
        <div className='info'>
          <p>Posted by: {project.createdFrom}</p>
          <p>Created at: 28/8/2020</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
