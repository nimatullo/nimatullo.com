import { useCursorHandlers, useDB } from "@app/hooks"
import type { Project } from "@app/nimatullo-types"
import { randomHSLColor } from "@app/styles/colors"
import { getBorderedContainerStyle } from "@app/styles/css"
import { Helmet } from "@components/scaffold/Head"
import { PageIntro } from "@components/scaffold/PageIntro"
import styled from "@emotion/styled"
import { HeadFC } from "gatsby"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { ExternalLink, GitBranch } from "react-feather"

const ProjectItemContainer = styled(motion.li)((props) => ({
  ...getBorderedContainerStyle(props.theme),
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  minHeight: "200px",
  marginBottom: "1rem",
  a: {
    ...getBorderedContainerStyle(props.theme),
    padding: "0.5rem",
    transition: "ease 0.1s",
    textAlign: "center",
    margin: "1rem",
    display: "grid",
    placeItems: "center",
  },
  "a:hover": {
    borderWidth: "3px",
    backgroundColor: randomHSLColor(),
  },
  h2: { marginBottom: "10px", textTransform: "uppercase" },
}))

const ProjectItem = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLLIElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const mouseHandlers = useCursorHandlers()
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
          <a {...mouseHandlers} href={project.github}>
            <GitBranch />
          </a>
        )}
        {project.url && (
          <a {...mouseHandlers} href={project.url}>
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
