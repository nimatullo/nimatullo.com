import { db } from "@app/db"
import { useEffect, useState } from "react"

export const useMobile = (): { isMobile: boolean } => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust the breakpoint as needed
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
        // sleep
        await new Promise((resolve) => setTimeout(resolve, 5000))
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
