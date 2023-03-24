import React from "react";
import { getLinks } from "../services/firestore";
import Loader from "./Loader";
import { motion } from "framer-motion";

const Hoarder = () => {
  const [links, setLinks] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    setLoading(true);
    getLinks()
      .then((data) => setLinks(data))
      .catch((_) => {
        setLinks([
          {
            title: "Dummy website",
            url: "https://reminderse.com",
          },
        ]);
      })
      .finally(() => setLoading(false));
  };

  return loading ? (
    <Loader />
  ) : (
    <motion.ul
      variants={{
        open: {
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        },
        closed: {},
      }}
      initial="closed"
      animate="open"
    >
      {links.map((link) => (
        <motion.li
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 24 },
            },
            closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
          }}
          initial="closed"
          animate="open"
          className="hoarder-listitem"
        >
          <a className="link" href={link.url}>
            {link.title}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Hoarder;
