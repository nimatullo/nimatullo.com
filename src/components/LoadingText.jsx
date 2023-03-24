import React from "react";
import { motion, AnimatePresence, animate } from "framer-motion";

const techJargon = [
  "Optimizing data pipelines",
  "Deploying machine learning models",
  "Scaling infrastructure horizontally",
  "Integrating with third-party APIs",
  "Implementing real-time event processing",
  "Architecting cloud-native applications",
  "Building serverless architectures",
  "Designing distributed systems",
];

const textVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const LoadingComponent = ({ isLoading }) => {
  const [jargonIndex, setJargonIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setJargonIndex((index) => (index + 1) % techJargon.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingSpinner />
      <motion.p
        style={{ marginTop: 20 }}
        variants={textVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        key={jargonIndex}
      >
        {techJargon[jargonIndex]}
        ...
      </motion.p>
    </div>
  );
};

const LoadingSpinner = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000"
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(2 2)" strokeWidth="4">
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);

export default LoadingComponent;
