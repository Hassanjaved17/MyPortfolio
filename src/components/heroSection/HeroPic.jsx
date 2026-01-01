import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Skeleton from "react-loading-skeleton";
import { FaRegCircle } from "react-icons/fa6";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
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
        src="/images/me.jpg" // your new pic
        className={`w-full h-full object-cover object-[50%_40%] rounded-full transition-transform duration-500 
                   ${isLoading ? "hidden" : "block"} hover:scale-105`}
        onLoad={() => setIsLoading(false)}
        alt="Hassan Javed"
      />

      {/* Spinning Circle Background */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <FaRegCircle className="h-[115%] w-[115%] text-[#15D1E9]/40 dark:text-purple-400/30 blur-sm animate-[spin_40s_linear_infinite]" />
      </div>

      {/* Spinning Hexagon Backgrounds */}
      <div className="absolute inset-0 -z-20 flex justify-center items-center">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-orange opacity-70 blur-sm animate-[spin_40s_linear_infinite]" />
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan opacity-50 animate-[spin_60s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
