import { useClose, useCursorHandlers } from "@app/hooks"
import { Image } from "@components/scaffold"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"

const Container = styled.div`
  column-count: 3;
  column-gap: 1rem;
`
const StyledImage = styled(Image)`
  width: 100%;
  display: block;
  margin-bottom: 1rem;
  border: 2px solid transparent;
  transition: border 0.2s ease-in-out;
  &:hover {
    border: 2px solid black;
  }
`

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(15px);
  transition: backdrop-filter 0.2s ease-in-out;
`

const OpenedImage = styled(Image)`
  height: 80%;
  width: auto;
  object-fit: contain;
`

const MotionStyledImage = motion(StyledImage)
const MotionOpenedImage = motion(OpenedImage)

interface MasonryLayoutProps {
  pictures: string[]
}

export const MasonryLayout: React.FC<MasonryLayoutProps> = ({ pictures }) => {
  const { isOpen, close, open } = useClose()
  const handlers = useCursorHandlers()
  const [openedImage, setOpenedImage] = React.useState<string | null>(null)

  const handleImageClick = (url: string) => {
    setOpenedImage(url)
    open()
  }

  const handleClose = () => {
    setOpenedImage(null)
    close()
  }

  return (
    <>
      <Container>
        {pictures.map((url, index) => (
          <MotionStyledImage
            key={index}
            src={url}
            alt={`Image ${index}`}
            onClick={() => handleImageClick(url)}
            layoutId={`image-${url}`}
            layout={true}
            {...handlers}
          />
        ))}
      </Container>

      {isOpen && openedImage && (
        <StyledModal onClick={handleClose}>
          <MotionOpenedImage
            layoutId={`image-${openedImage}`}
            layout={true}
            src={openedImage}
            alt="Opened Image"
          />
        </StyledModal>
      )}
    </>
  )
}
