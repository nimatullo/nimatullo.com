import { useCursor } from "@app/contexts/cursorContext"
import { db } from "@app/db"
import React, { useEffect, useState } from "react"

export const useMobile = (): { isMobile: boolean } => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // mobile breakpoint
    }

    handleResize() // Check on initial render

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { isMobile }
}

export const useDarkMode = (): { isDarkMode: boolean } => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDarkMode(isDarkMode.matches)

    isDarkMode.addEventListener("change", (e) => setIsDarkMode(e.matches))

    return () =>
      isDarkMode.removeEventListener("change", (e) => setIsDarkMode(e.matches))
  }, [])

  return { isDarkMode }
}

type DBModel = typeof db
type DBKey = keyof DBModel
type DBReturnType<K extends DBKey> = Awaited<ReturnType<DBModel[K]["all"]>>

export const useDB = <K extends DBKey>(key: K) => {
  const [data, setData] = useState<DBReturnType<K>>([] as DBReturnType<K>)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      try {
        const dataPoint = db[key]
        const result = (await dataPoint.all()) as DBReturnType<K>
        setData(result ?? [])
      } catch (error) {
        console.error(error)
        setData([] as DBReturnType<K>)
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [key])

  return { data, loading }
}

export const useCursorHandlers = () => {
  const { setCursor } = useCursor()

  const onMouseEnter = React.useCallback(() => {
    setCursor({ active: true })
  }, [setCursor])

  const onMouseLeave = React.useCallback(() => {
    setCursor({ active: false })
  }, [setCursor])

  return { onMouseEnter, onMouseLeave }
}

export const useClose = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)

  return { isOpen, close, open }
}
