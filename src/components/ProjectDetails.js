import React from "react";

const ProjectDetails = ({ project }) => {
  console.log(project);
  return (
    <div className='container'>
      <div className='project-wrapper'>
        <div className='details-inner'>
          <div className='project-header'>
            <h2>{project.title}</h2>
          </div>
          <div className='project-body'>
            <p>{project.details}</p>
          </div>
          <div className='project-info'>
            <p>Created from: nikos tzam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
