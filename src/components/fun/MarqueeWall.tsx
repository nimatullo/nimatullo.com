import { Theme } from "@emotion/react/dist/declarations/src"
import styled, { Interpolation } from "@emotion/styled"
import { motion, useAnimationControls } from "motion/react"
import React, { useEffect, useRef } from "react"

interface MarqueeProps {
  children: React.ReactNode
  reverse?: boolean
  speed?: number
}

const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: auto;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgb(0, 0, 0) 12.5%,
    rgb(0, 0, 0) 87.5%,
    rgba(0, 0, 0, 0) 100%
  );
`

const Track = styled(motion.div)`
  white-space: nowrap;
  font-size: 1.5rem;
`

const Text = styled.div`
  display: inline-flex;
  margin-right: 5px;
  font-family: "DM Serif Text";
`

const Marquee = ({ children, reverse = false, speed = 10 }: MarqueeProps) => {
  const [width, setWidth] = React.useState(0)
  const [repeatCount, setRepeatCount] = React.useState(2)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const textWidth = textRef.current.offsetWidth
      setWidth(textWidth)

      const count = Math.ceil(containerWidth / textWidth) + 1
      setRepeatCount(count)
    }
  }, [children])

  useEffect(() => {
    if (width > 0) {
      const animX = reverse ? [-width, 0] : [0, -width]
      const duration = width / speed
      controls.start({
        x: animX,
        transition: {
          duration,
          repeat: Infinity,
          ease: "linear",
        },
      })
    }
  }, [width, reverse, controls])

  return (
    <MarqueeWrapper ref={containerRef}>
      <Track animate={controls}>
        {[...Array(repeatCount)].map((_, i) => (
          <Text key={i} ref={textRef}>
            {children}
          </Text>
        ))}
      </Track>
    </MarqueeWrapper>
  )
}

interface MarqueeWallProps {
  text: string[]
  wrapperCss?: Interpolation<Theme>
}

export const MarqueeWall = (props: MarqueeWallProps) => {
  const { text, wrapperCss } = props

  return (
    <div css={wrapperCss}>
      {text.map((t, i) => (
        <Marquee key={i} reverse={i % 2 === 0}>
          {t}
        </Marquee>
      ))}
    </div>
  )
}
