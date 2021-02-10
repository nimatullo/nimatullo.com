import React from "react";

const ProjectContainer = ({ project }) => {
  return (
    <div className="projectContent">
      <div className="info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className="actions">
        {project.link && (
          <a
            target="_blank"
            rel="noreferrer"
            className="hover"
            href={project.link}
          >
            Project URL
          </a>
        )}
        {project.github && (
          <a
            target="_blank"
            rel="noreferrer"
            className="hover"
            href={project.github}
          >
            Github URL
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
