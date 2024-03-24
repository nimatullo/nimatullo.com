import { motion, useInView } from "framer-motion"
import React, { useRef } from "react"

const style = {
  border: "2px solid black",
}

const Book = ({ book }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const { title, thumbnail, author } = book
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
      className="gridChildContainer center"
    >
      <h2>{title}</h2>
      <img style={style} src={thumbnail} alt="Book Img" />
      <p>{author}</p>
    </motion.div>
  )
}

export default Book
