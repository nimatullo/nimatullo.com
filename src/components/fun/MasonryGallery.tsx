import { useCursorHandlers } from "@app/hooks"
import { Image } from "@components/scaffold"
import styled from "@emotion/styled"
import { AnimatePresence, motion } from "motion/react"
import React from "react"
import { ArrowLeft, ArrowRight } from "react-feather"

const Container = styled.div`
  column-count: 3;
  column-gap: 1rem;

  @media (max-width: 768px) {
    column-count: 2;
  }

  @media (max-width: 480px) {
    column-count: 1;
  }
`
const StyledImage = styled(Image)`
  width: 100%;
  display: block;
  margin-bottom: 1rem;
  border: 2px solid transparent;
  transition: border 0.2s ease-in-out;
  &:hover {
    mix-blend-mode: color-burn;
    border: 2px solid black;
  }
`

const StyledModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.85);
`

const OpenedImage = styled(Image)`
  max-height: 90vh;
  max-width: 90vw;
  width: auto;
  height: auto;
  object-fit: contain;
`

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.15s ease-out;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`

const PrevButton = styled(NavButton)`
  left: 1.5rem;
`

const NextButton = styled(NavButton)`
  right: 1.5rem;
`

const cloudinaryThumb = (url: string, width: number) => {
  const marker = "/upload/"
  const i = url.indexOf(marker)
  if (i === -1) return url
  return (
    url.slice(0, i + marker.length) +
    `w_${width},q_auto,f_auto/` +
    url.slice(i + marker.length)
  )
}

interface MasonryLayoutProps {
  pictures: string[]
}

export const MasonryGallery: React.FC<MasonryLayoutProps> = ({ pictures }) => {
  const handlers = useCursorHandlers()
  const [openedIndex, setOpenedIndex] = React.useState<number | null>(null)

  const isOpen = openedIndex !== null

  const handleImageClick = (index: number) => {
    setOpenedIndex(index)
  }

  const handleClose = () => {
    setOpenedIndex(null)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (openedIndex !== null && openedIndex > 0) {
      setOpenedIndex(openedIndex - 1)
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (openedIndex !== null && openedIndex < pictures.length - 1) {
      setOpenedIndex(openedIndex + 1)
    }
  }

  React.useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
      if (e.key === "ArrowLeft") {
        setOpenedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
      }
      if (e.key === "ArrowRight") {
        setOpenedIndex((prev) =>
          prev !== null && prev < pictures.length - 1 ? prev + 1 : prev
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, pictures.length])

  return (
    <>
      <Container>
        {pictures.map((url, index) => (
          <StyledImage
            key={index}
            src={cloudinaryThumb(url, 400)}
            alt={`Image ${index}`}
            loading="lazy"
            onClick={() => handleImageClick(index)}
            {...handlers}
          />
        ))}
      </Container>

      <AnimatePresence>
        {isOpen && (
          <StyledModal
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <OpenedImage
              src={pictures[openedIndex!]}
              alt="Opened Image"
            />

            {openedIndex! > 0 && (
              <PrevButton onClick={handlePrev} aria-label="Previous image">
                <ArrowLeft size={24} />
              </PrevButton>
            )}

            {openedIndex! < pictures.length - 1 && (
              <NextButton onClick={handleNext} aria-label="Next image">
                <ArrowRight size={24} />
              </NextButton>
            )}
          </StyledModal>
        )}
      </AnimatePresence>
    </>
  )
}
