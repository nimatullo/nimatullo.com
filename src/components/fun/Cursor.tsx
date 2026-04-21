import { useCursor } from "@app/contexts/cursorContext"
import { twColors } from "@app/styles/colors"
import { useEffect, useRef } from "react"

export const Cursor = () => {
  const { cursor } = useCursor()

  const mouseDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (mouseDivRef.current) {
        mouseDivRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    })
    return () => {
      window.removeEventListener("mousemove", () => {})
    }
  })

  return (
    <div
      ref={mouseDivRef}
      css={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
        mixBlendMode: "difference",
      }}
    >
      <div
        css={{
          height: 25,
          width: 25,
          display: "grid",
          placeItems: "center",
          backgroundColor: twColors.neutral[100],
          transform: `translate(-50%, -50%) ${
            cursor.active ? "scale(0.5)" : "scale(1)"
          }`,
          borderRadius: "50%",
          filter: `drop-shadow(0 0 0.5rem ${twColors.neutral[500]})`,
          transition: "all 0.1s",
          opacity: cursor.active ? 0 : 1,
        }}
      />
    </div>
  )
}
