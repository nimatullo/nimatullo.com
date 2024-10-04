import "@fontsource/dm-serif-text"
import "@fontsource/inconsolata"
import "@fontsource/overpass"
import type { GatsbyBrowser } from "gatsby"
import { Layout } from "./src/components/Layout"

const excludedPaths = ["/"]

const cleanCurrentPath = (path: string) => {
  // path should just be a / followed by the route name
  return `/${path.replace(/[^a-zA-Z ]/g, "").toLowerCase()}`
}

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  const { location } = props
  const path = cleanCurrentPath(location.pathname)
  if (excludedPaths.includes(path)) return element

  return <Layout {...props}>{element as any}</Layout>
}
