import { CursorProvider } from "@app/contexts/cursorContext"
import { useMobile } from "@app/hooks"
import { Cursor } from "@components/fun/Cursor"
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

const CursorWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useMobile()
  return isMobile ? (
    children
  ) : (
    <CursorProvider>
      <Cursor />
      {children}
    </CursorProvider>
  )
}

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  const { location } = props
  const path = cleanCurrentPath(location.pathname)
  return (
    <CursorWrapper>
      {excludedPaths.includes(path) ? (
        element
      ) : (
        <Layout {...props}>{element as any}</Layout>
      )}
    </CursorWrapper>
  )
}
