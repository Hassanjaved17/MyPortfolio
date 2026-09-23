import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Skeleton from "react-loading-skeleton";
import { PiHexagonThin } from "react-icons/pi";
import { FaRocket } from "react-icons/fa";

const HeroPic = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="relative md:w-[380px] w-[260px] md:h-[380px] h-[260px] shrink-0"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 180, damping: 15 }}
        className="relative w-full h-full flex items-center justify-center rounded-full overflow-hidden border-4 border-white/10 shadow-lg"
      >
        {isLoading && (
          <Skeleton
            circle
            height="100%"
            width="100%"
            baseColor="#ccc"
            highlightColor="#e5e5e5"
            className="absolute inset-0"
          />
        )}

        <img
          src="/images/hassanj.png"
          className={`w-full h-full object-cover object-[50%_40%] rounded-full
                     transition-opacity duration-500
                     ${isLoading ? "opacity-0" : "opacity-100"}`}
          onLoad={() => setIsLoading(false)}
          alt="Hassan Javed"
          loading="eager"
          fetchPriority="high"
        />

        <div
          className="absolute inset-0 -z-10 flex justify-center items-center"
          style={{ willChange: "transform" }}
        >
          <PiHexagonThin
            className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-orange opacity-60 blur-sm"
            style={{ animation: "spin 50s linear infinite", willChange: "transform" }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-2 right-[-10px] md:right-[-20px] flex items-center gap-2 px-3 py-2 rounded-2xl bg-black/70 backdrop-blur-lg border border-orange/30 shadow-cyanShadow"
      >
        <FaRocket className="text-orange text-sm" />
        <span className="text-xs font-bold text-white whitespace-nowrap">2+ Yrs Experience</span>
      </motion.div>
    </motion.div>
  );
};

export default HeroPic;