import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Skeleton from "react-loading-skeleton";
import { FaRegCircle } from "react-icons/fa6";


const HeroPic = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative md:w-[400px] w-[270px] md:h-[400px] h-[270px] flex items-center justify-center border-4 shadow-xl shadow-black border-black dark:!border-white rounded-full overflow-hidden p-2"
    >
      {/* Loading skeleton */}
      {isLoading && (
        <Skeleton
          circle
          height="100%"
          width="100%"
          baseColor="#ccc"
          highlightColor="#e5e5e5"
        />
      )}

      {/* Profile image */}

      <img
        src="/images/heroimg8.png"
        className={`w-full h-full object-cover ${isLoading ? "hidden" : "block"}`}
        onLoad={() => setIsLoading(false)}
        alt="Hassan Javed"

      />



      {/* Spinning background */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center animate-pulse">
        <FaRegCircle className="h-full w-full text-cyan  blur-md animate-[spin_20s_linear_infinite]" />
      </div>

    </motion.div>
  );
};

export default HeroPic;
