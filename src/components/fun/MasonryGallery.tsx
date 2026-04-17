import { useCursorHandlers } from "@app/hooks"
import { Image } from "@components/scaffold"
import { Spinner } from "@components/scaffold/Spinner"
import styled from "@emotion/styled"
import { AnimatePresence, motion, type Transition } from "motion/react"
import React from "react"
import { ArrowLeft, ArrowRight } from "react-feather"

const bouncySpring: Transition = {
  type: "spring",
  duration: 0.5,
  bounce: 0.35,
}

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

const ThumbnailWrapper = styled(motion.div)`
  break-inside: avoid;
  margin-bottom: 1rem;
  cursor: pointer;
`

const StyledImage = styled(Image)`
  width: 100%;
  display: block;
  border: 2px solid transparent;
  transition: border 0.2s ease-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      mix-blend-mode: color-burn;
      border: 2px solid black;
    }
  }
`

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.85);
`

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`

const OpenedImage = styled(Image)`
  max-height: 90vh;
  max-width: 90vw;
  width: auto;
  height: auto;
  object-fit: contain;
`

const NavButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
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

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new window.Image()
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
  })
}

interface MasonryLayoutProps {
  pictures: string[]
}

export const MasonryGallery: React.FC<MasonryLayoutProps> = ({ pictures }) => {
  const handlers = useCursorHandlers()
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const [openedIndex, setOpenedIndex] = React.useState<number | null>(null)

  const isLoading = selectedIndex !== null && openedIndex === null
  const showBackdrop = selectedIndex !== null

  const handleOpen = async (index: number) => {
    setSelectedIndex(index)
    await preloadImage(pictures[index])
    setOpenedIndex(index)
  }

  const handleClose = () => {
    setSelectedIndex(null)
    setOpenedIndex(null)
  }

  const navigate = (dir: 1 | -1, e?: React.MouseEvent) => {
    e?.stopPropagation()
    setOpenedIndex((prev) => {
      if (prev === null) return prev
      const next = prev + dir
      if (next < 0 || next >= pictures.length) return prev
      setSelectedIndex(next)
      return next
    })
  }

  React.useEffect(() => {
    if (openedIndex === null) return
    if (openedIndex > 0) preloadImage(pictures[openedIndex - 1])
    if (openedIndex < pictures.length - 1) preloadImage(pictures[openedIndex + 1])
  }, [openedIndex, pictures])

  React.useEffect(() => {
    if (!showBackdrop) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
      if (e.key === "ArrowLeft") navigate(-1)
      if (e.key === "ArrowRight") navigate(1)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [showBackdrop, pictures.length])

  return (
    <>
      <Container>
        {pictures.map((url, index) => (
          <ThumbnailWrapper
            key={index}
            layoutId={`gallery-${index}`}
            onClick={() => handleOpen(index)}
            transition={bouncySpring}
            {...handlers}
          >
            <StyledImage
              src={cloudinaryThumb(url, 400)}
              alt={`Image ${index}`}
              loading="lazy"
            />
          </ThumbnailWrapper>
        ))}
      </Container>

      <AnimatePresence>
        {showBackdrop && (
          <Backdrop
            key="backdrop"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLoading && (
          <ModalOverlay key="loader" onClick={handleClose}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Spinner />
            </motion.div>
          </ModalOverlay>
        )}
      </AnimatePresence>

      {openedIndex !== null && (
        <ModalOverlay onClick={handleClose}>
          <motion.div
            key={openedIndex}
            layoutId={`gallery-${openedIndex}`}
            transition={bouncySpring}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <OpenedImage
              src={pictures[openedIndex]}
              alt="Opened Image"
            />
          </motion.div>

          {openedIndex > 0 && (
            <PrevButton
              onClick={(e: React.MouseEvent) => navigate(-1, e)}
              aria-label="Previous image"
              initial={{ x: -10, y: "-50%", opacity: 0 }}
              animate={{ x: 0, y: "-50%", opacity: 1 }}
              transition={bouncySpring}
              whileTap={{ scale: 0.85 }}
            >
              <ArrowLeft size={24} />
            </PrevButton>
          )}

          {openedIndex < pictures.length - 1 && (
            <NextButton
              onClick={(e: React.MouseEvent) => navigate(1, e)}
              aria-label="Next image"
              initial={{ x: 10, y: "-50%", opacity: 0 }}
              animate={{ x: 0, y: "-50%", opacity: 1 }}
              transition={bouncySpring}
              whileTap={{ scale: 0.85 }}
            >
              <ArrowRight size={24} />
            </NextButton>
          )}
        </ModalOverlay>
      )}
    </>
  )
}
