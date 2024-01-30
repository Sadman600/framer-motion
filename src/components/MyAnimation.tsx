import { motion } from "framer-motion";
import "./MyAnimation.css";

const parent = {
  initial: { rotate: 0 },
  animate: { rotate: 360 },
};

const MyAnimation = () => {
  return (
    <>
      <motion.div
        className="animationContainer"
        variants={parent}
        initial="initial"
        animate="animate"
        transition={{ duration: 2 }}
      >
        <h1>Hell Animate</h1>
      </motion.div>
    </>
  );
};

export default MyAnimation;
