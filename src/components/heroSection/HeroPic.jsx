import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Skeleton from "react-loading-skeleton";
import { PiHexagonThin } from "react-icons/pi";


const HeroPic = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 180, damping: 15 }}
      className="relative md:w-[380px] w-[260px] md:h-[380px] h-[260px]
                 flex items-center justify-center rounded-full overflow-hidden
                 border-4 border-black dark:border-white shadow-lg"
    >
      {/* Loading Skeleton */}
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

      {/* Profile Image */}
      <img
        src="/images/hassanj.png"
        className={`w-full h-full object-cover object-[50%_40%] rounded-full
                   transition-opacity duration-500
                   ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
        alt="Hassan Javed"
      />


      <div
        className="absolute inset-0 -z-10 flex justify-center items-center"
        style={{ willChange: "transform" }}
      >
        <PiHexagonThin
          className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-orange opacity-60 blur-sm"
          style={{
            animation: "spin 50s linear infinite",
            willChange: "transform",
          }}
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;