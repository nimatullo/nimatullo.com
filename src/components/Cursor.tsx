import { useCursor } from "@app/contexts/cursorContext"
import { useMousePosition } from "@app/hooks"
import { motion } from "framer-motion"

export const Cursor = () => {
  const { x, y } = useMousePosition()
  const { cursor } = useCursor()

  return (
    <div
      css={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
        mixBlendMode: "difference",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      <motion.svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        css={{
          position: "absolute",
          top: y,
          left: x,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 1.5 : 1})`,
          transition: "transform 0.2s",
          opacity: cursor.active ? 0 : 1,
        }}
      >
        <circle cx={25} cy={25} r={8} fill="white" />
      </motion.svg>
    </div>
  )
}
