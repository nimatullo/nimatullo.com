import { useDB } from "@app/hooks"
import type { Project } from "@app/nimatullo-types"
import { Helmet } from "@components/scaffold/Head"
import { PageIntro } from "@components/scaffold/PageIntro"
import styled from "@emotion/styled"
import { motion, useInView } from "framer-motion"
import { HeadFC } from "gatsby"
import { useRef } from "react"
import { ExternalLink, GitBranch } from "react-feather"

const ProjectItemContainer = styled(motion.li)((props) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  justifyContent: "center",
  alignItems: "center",
  border: `3px solid ${props.theme.twColors.neutral[300]}`,
  padding: "1rem",
  width: "100%",
  backgroundColor: props.theme.twColors.neutral[100],
  minHeight: "200px",
  marginBottom: "1rem",
  a: {
    border: `3px solid ${props.theme.twColors.neutral[300]}`,
    padding: "0.5rem",
    transition: "ease 0.3s",
    textAlign: "center",
    margin: "1rem",
    display: "grid",
    placeItems: "center",
  },
  "a:hover": {
    backgroundColor: props.theme.twColors.neutral[300],
  },
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
        {project.url && (
          <a href={project.url}>
            <ExternalLink />
          </a>
        )}
      </div>
    </ProjectItemContainer>
  )
}

const ProjectsPage = () => {
  const { data: projects, loading } = useDB("projects")

  return (
    <PageIntro header="Projects" loading={loading}>
      <ul>
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </ul>
    </PageIntro>
  )
}
export default ProjectsPage

export const Head: HeadFC = () => <Helmet title="projects" />
