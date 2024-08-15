import { db } from "@app/db"
import type { SSRPageProps } from "@app/nimatullo-types"
import { Flex } from "@components/scaffold"
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

const MemesPage: React.FC<SSRPageProps<{ url: string }[], "memes">> = ({
  serverData,
}) => {
  const { memes } = serverData
  const [i, setIndex] = React.useState(0)

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

export async function getServerData() {
  const memes = await db.memes.all()
  return { props: { memes } }
}

export default MemesPage
