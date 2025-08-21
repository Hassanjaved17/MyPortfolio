import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 p-3 rounded-full 
                     text-[#FB9718] shadow-lg text-2xl bg-[#2C2523] 
                     border-2 border-[#FB9718] box-border
                     hover:bg-[#FB9718] hover:text-white hover:border-white
                     transition-colors duration-300"
          whileHover={{ scale: 1.15 }}
          animate={{
            y: [0, -10, 0], // bounce whole button
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
