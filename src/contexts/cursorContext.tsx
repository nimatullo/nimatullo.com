import React, { useState } from "react"

interface CursorContext {
  cursor: { active: boolean }
  setCursor: ({ active }: { active: boolean }) => void
}

const CursorContext = React.createContext<CursorContext>({
  cursor: { active: false },
  setCursor: () => {},
})

export const useCursor = () => React.useContext(CursorContext)

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursor, setCursor] = useState<{ active: boolean }>({ active: false })

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      {children}
    </CursorContext.Provider>
  )
}
