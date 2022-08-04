import React from "react";
import { Code, ExternalLink } from "react-feather";

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
            title="External Link"
          >
            <ExternalLink size="1em" color="#1c1c1c" />
          </a>
        )}
        {project.github && (
          <a
            target="_blank"
            rel="noreferrer"
            className="hover"
            href={project.github}
            title="Source code"
          >
            <Code size="1em" color="#1c1c1c"/>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
