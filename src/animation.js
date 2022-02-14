import { motion } from "framer-motion";
import "./animate.css";

const Animation = () => {
  return (
    <div className="wrapper">
      <motion.div
        className="one"
        animate={{
          x: ["0px", "100px", "0px"],
        }}
        transition={{
          type: "tween",
          duration: 2,
        }}
      >
        Lul I'm Animated XD
      </motion.div>
      <motion.div
        className="two"
        animate={{ x: 100, y: 100, opacity: 1 }}
        transition={{
          delay: 1,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 },
        }}
      >
        Lul I'm Animated XD
      </motion.div>

      <motion.button
        className="btn"
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        Button
      </motion.button>
    </div>
  );
};

export default Animation;
