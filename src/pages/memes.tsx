import { useDB } from "@app/hooks"
import { Flex } from "@components/scaffold"
import { Spinner } from "@components/scaffold/Spinner"
import styled from "@emotion/styled"
import React from "react"
import { ArrowLeft, ArrowRight } from "react-feather"

const StyledButton = styled.button({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "1.5rem",
  padding: "0.5rem",
})

const MemesPage = () => {
  const { data: memes, loading } = useDB("memes")
  const [i, setIndex] = React.useState(0)

  if (loading) {
    return <Spinner />
  }

  return (
    <Flex direction="column">
      <img
        css={{
          height: "50vh",
          margin: "2rem 0",
        }}
        src={memes[i].url}
        alt="meme"
      />
      <div>
        <StyledButton
          onClick={() => setIndex((i - 1 + memes.length) % memes.length)}
        >
          <ArrowLeft />
        </StyledButton>
        <StyledButton onClick={() => setIndex((i + 1) % memes.length)}>
          <ArrowRight />
        </StyledButton>
      </div>
    </Flex>
  )
}

export default MemesPage

export const MemesPageHead: React.FC = () => <title>Memes</title>
