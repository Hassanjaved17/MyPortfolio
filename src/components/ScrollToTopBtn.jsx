import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 p-3 rounded-full z-30
                     text-orange shadow-lg text-2xl bg-black/90
                     border-2 border-orange box-border
                     hover:bg-orange hover:text-white hover:border-white
                     transition-colors duration-300"
          whileHover={{ scale: 1.15 }}
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0 0 0px #FB9718",
              "0 0 14px #FB9718",
              "0 0 0px #FB9718",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaChevronUp size={22} />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTopBtn;