import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { TypeAnimation } from "react-type-animation";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center text-center md:text-left">
      {/* Main Heading */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-6xl text-orange font-bold uppercase leading-tight"
      >
        Hassan Javed
        <br className="hidden md:block" />
      </motion.h1>

      {/* Animated subtitle */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg sm:text-xl lg:text-2xl uppercase text-lightGrey"
      >
        <TypeAnimation
          sequence={[
            "I am Frontend Web Developer",
            1000,
            "I am a Mern Stack Developer",
            1000,
            "I am a Full Stack Developer",
            1000,
            "I am Responsive Designer",
            1000,
            "I am a Creative Designer",
            1000,
          ]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
          preRenderFirstString={true}
        />
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base sm:text-lg mt-4 leading-relaxed"
      >
        A Passionate Web Developer <br className="hidden sm:block" />
        with 2 years of experience.
      </motion.p>
    </div>
  );
};

export default HeroText;
