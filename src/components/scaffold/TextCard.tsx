import { EmojiProps } from "@app/nimatullo-types"
import { Emoji } from "@components/Emoji"
import { Flex } from "@components/scaffold"
import styled from "@emotion/styled"
import React from "react"

const TextContainer = styled.div({
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

interface TextCardProps extends React.HTMLAttributes<HTMLDivElement> {
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
    <TextContainer {...rest}>
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
