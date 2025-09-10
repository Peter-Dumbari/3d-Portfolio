import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0)} // faster stagger
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }} // trigger earlier
        transition={{ duration: 0.2, ease: "easeOut" }} // snappier animation
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
