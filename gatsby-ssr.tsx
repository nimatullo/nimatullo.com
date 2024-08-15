import type { GatsbySSR } from "gatsby"
import React from "react"
import { Layout } from "./src/components/Layout"

const excludePaths = ["/"]

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
  element,
  props,
}) => {
  const { location } = props
  if (excludePaths.includes(location.pathname)) return element

  return <Layout {...props}>{element as any}</Layout>
}
