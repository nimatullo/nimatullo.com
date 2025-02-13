import { Theme } from "@emotion/react"
import { Interpolation } from "@emotion/styled"
import { AnimatePresence, motion } from "framer-motion"
import { useMemo } from "react"

interface TransformingTextProps {
  text: string
  textCss?: Interpolation<Theme>
  wrapperCss?: Interpolation<Theme>
}

export const TransformingText = (props: TransformingTextProps) => {
  const { text, textCss, wrapperCss } = props

  const chars = useMemo(() => {
    const entities = text.split("").map((c) => c.toLowerCase())
    const chars: { label: string; id: string }[] = []

    entities.forEach((char, index) => {
      const count = entities.slice(0, index).filter((c) => c === char).length

      chars.push({
        id: `${char}${count + 1}`,
        label: char,
      })
    })

    return chars
  }, [text])

  return (
    <div css={wrapperCss}>
      <AnimatePresence mode="popLayout">
        {chars.map((ch) => (
          <motion.span
            key={ch.id}
            layoutId={ch.id}
            layout="position"
            css={textCss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              bounce: 0.1,
              duration: 0.3,
            }}
          >
            {ch.label}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
