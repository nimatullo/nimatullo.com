import React, { useRef } from "react";
import { Code, ExternalLink } from "react-feather";
import { motion, useInView } from "framer-motion";

const ProjectContainer = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="projectContent"
    >
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
            <Code size="1em" color="#1c1c1c" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectContainer;
