import React from "react"
import { Link } from "gatsby"

const ProjectContainer = ({ project }) => {
  return (
    <div className="projectContent">
      <div className="info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className="actions">
        {project.link && (
          <Link target="_blank" className="hover" to={project.link}>
            Project URL
          </Link>
        )}
        {project.github && (
          <Link target="_blank" className="hover" to={project.github}>
            Github URL
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProjectContainer
