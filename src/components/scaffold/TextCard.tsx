import { EmojiProps } from "@app/nimatullo-types"
import { transition } from "@app/styles"
import { randomMinMax } from "@app/utils"
import { Emoji } from "@components/Emoji"
import { Flex } from "@components/scaffold"
import styled from "@emotion/styled"
import { motion, MotionProps } from "motion/react"
import React from "react"

const TextContainer = styled(motion.div)({
  transition: "all 0.2s",
  "& header": {
    marginBottom: "1rem",
    "& h4": {
      marginLeft: "0.5rem",
    },
  },
  "& p": {
    margin: 0,
  },
})

type BaseMotionProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onAnimationStart"
> &
  MotionProps

interface TextCardProps extends BaseMotionProps {
  title: string
  description: string
  emoji: EmojiProps
}

export const TextCard = ({
  title,
  description,
  emoji,
  ...rest
}: TextCardProps) => {
  return (
    <TextContainer
      {...rest}
      whileHover={{
        scale: 1.1,
        rotate: randomMinMax(-2, 2),
      }}
      transition={transition}
    >
      <header>
        <Flex direction="row" justify="start">
          <Emoji {...emoji} />
          <h4>{title}</h4>
        </Flex>
      </header>
      <p>{description}</p>
    </TextContainer>
  )
}
