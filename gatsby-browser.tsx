import "@fontsource/dm-serif-text"
import "@fontsource/inconsolata"
import "@fontsource/overpass"
import type { GatsbyBrowser } from "gatsby"
import { Layout } from "./src/components/Layout"

const excludePaths = ["/"]

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  const { location } = props
  if (excludePaths.includes(location.pathname)) return element

  return <Layout {...props}>{element as any}</Layout>
}
