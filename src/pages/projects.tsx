import { db } from "@app/db"
import type { Project } from "@app/nimatullo-types"
import styled from "@emotion/styled"
import { motion, useInView } from "framer-motion"
import { HeadFC, PageProps } from "gatsby"
import React, { useRef } from "react"
import { ExternalLink, GitBranch } from "react-feather"

const ProjectItemContainer = styled(motion.li)((props) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  justifyContent: "center",
  alignItems: "center",
  border: `3px solid ${props.theme.twColors.gray[300]}`,
  padding: "1rem",
  width: "100%",
  backgroundColor: props.theme.baseColors.white,
  minHeight: "200px",
  a: {
    border: `3px solid ${props.theme.twColors.gray[300]}`,
    padding: "0.5rem",
    transition: "ease 0.3s",
    textAlign: "center",
    margin: "1rem",
    display: "grid",
    placeItems: "center",
  },
  "a:hover": { opacity: 0.7 },
  h2: { marginBottom: "10px", textTransform: "uppercase" },
}))

const ProjectItem = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLLIElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  return (
    <ProjectItemContainer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <div css={{ gridColumn: "span 2 / auto" }}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>

      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          direction: "rtl",
        }}
      >
        {project.github && (
          <a href={project.github}>
            <GitBranch />
          </a>
        )}
        {project.link && (
          <a href={project.link}>
            <ExternalLink />
          </a>
        )}
      </div>
    </ProjectItemContainer>
  )
}

interface ProjectsPageProps extends PageProps {
  serverData: Project[]
}

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  const { serverData } = props
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {serverData.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </ul>
    </div>
  )
}
export default ProjectsPage

export const getServerData = async () => {
  const projects = await db.projects.all()
  return { props: projects }
}

export const Head: HeadFC = () => <title>Projects</title>
