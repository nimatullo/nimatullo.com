import { Emoji } from "@components/Emoji"
import { Flex } from "@components/layout"
import styled from "@emotion/styled"
import { EmojiProps } from "nimatullo-types"
import React from "react"

const TextContainer = styled.div({
  padding: "1rem",
  borderRadius: "0.5rem",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
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
