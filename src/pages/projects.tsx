import { HeadFC, PageProps } from "gatsby"
import React from "react"

const ProjectsPage: React.FC<PageProps> = (props) => {
  return <h1>Projects</h1>
}
export default ProjectsPage

export const Head: HeadFC = () => <title>Projects</title>
