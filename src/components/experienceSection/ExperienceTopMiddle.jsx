import { motion } from "framer-motion";

const ExperienceTopMiddle = () => {
  return (
    <motion.div
      className="lg:w-[35%] md:w-[50%] sm:w-[80%]"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <img src="/images/experience-image.png" alt="My experience" />
    </motion.div>
  );
};

export default ExperienceTopMiddle;