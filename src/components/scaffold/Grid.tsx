import styled from "@emotion/styled"
import { motion } from "framer-motion"

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-content: center;
  column-gap: 1em;
  row-gap: 1em;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
