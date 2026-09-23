import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center text-center md:text-left">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="inline-flex items-center gap-2 mx-auto md:mx-0 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs uppercase tracking-[0.15em] w-fit"
      >
        <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
        Available for work
      </motion.div>

      <motion.h1
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-6xl text-orange font-bold uppercase leading-tight"
      >
        Hassan Javed
        <br className="hidden md:block" />
      </motion.h1>

      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-lg sm:text-xl lg:text-2xl uppercase text-lightGrey"
      >
        <TypeAnimation
          sequence={[
            500,
            "I am Frontend Web Developer",
            1000,
            "I am a MERN Stack Developer",
            1000,
            "I am a Full Stack Developer",
            1000,
            "I am a Responsive Designer",
            1000,
            "I am a Creative Designer",
            1000,
          ]}
          wrapper="span"
          speed={35}
          repeat={Infinity}
          preRenderFirstString={false}
        />
      </motion.div>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-base sm:text-lg mt-2 leading-relaxed text-lightGrey"
      >
        A Passionate Web Developer <br className="hidden sm:block" />
        with 2 years of experience.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="flex flex-wrap gap-4 justify-center md:justify-start mt-4"
      >
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="group px-6 py-3 rounded-full font-bold bg-gradient-to-r from-darkCyan to-orange text-white flex items-center gap-2 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-cyanShadow"
        >
          View My Work
          <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="px-6 py-3 rounded-full font-bold border border-orange/40 text-white flex items-center gap-2 cursor-pointer transition-all duration-500 hover:scale-105 hover:border-orange"
        >
          <FiMail />
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroText;