import { useCursor } from "@app/contexts/cursorContext"
import { twColors } from "@app/styles/colors"
import React, { useCallback, useEffect, useRef } from "react"

const TRAIL = [
  { duration: 80, opacity: 0.55, scale: 0.7 },
  { duration: 150, opacity: 0.4, scale: 0.5 },
  { duration: 240, opacity: 0.25, scale: 0.35 },
  { duration: 350, opacity: 0.15, scale: 0.22 },
  { duration: 500, opacity: 0.08, scale: 0.14 },
]

export const Cursor = () => {
  const { cursor } = useCursor()

  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLDivElement | null)[]>([])

  const setTrailRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      trailRefs.current[i] = el
    },
    [],
  )

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const pos = `translate(${e.clientX}px, ${e.clientY}px)`
      if (cursorRef.current) cursorRef.current.style.transform = pos
      trailRefs.current.forEach((el) => {
        if (el) el.style.transform = pos
      })
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <React.Fragment>
      {TRAIL.map((dot, i) => (
        <div
          key={i}
          ref={setTrailRef(i)}
          css={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9998,
            pointerEvents: "none",
            mixBlendMode: "difference",
            transition: `transform ${dot.duration}ms ease-out`,
          }}
        >
          <div
            css={{
              width: 25 * dot.scale,
              height: 25 * dot.scale,
              backgroundColor: twColors.neutral[100],
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              opacity: dot.opacity,
            }}
          />
        </div>
      ))}
      <div
        ref={cursorRef}
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
            transition: "transform 100ms ease-out, opacity 100ms ease-out",
            opacity: cursor.active ? 0 : 1,
          }}
        />
      </div>
    </React.Fragment>
  )
}
