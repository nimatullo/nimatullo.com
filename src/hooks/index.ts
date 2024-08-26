import { auth } from "@app/config/firebaseConfig"
import { User, onAuthStateChanged } from "firebase/auth"
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

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser)

  useEffect(() => {
    const listener = onAuthStateChanged(auth, async (user) => {
      if (user) setCurrentUser(user)
    })

    return () => listener()
  }),
    [auth]

  return { currentUser }
}
