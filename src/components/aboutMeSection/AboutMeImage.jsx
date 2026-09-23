import { motion } from "framer-motion";

const AboutMeImage = () => {
  return (
    <motion.div
      className="h-[500px] w-[300px] relative"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden border border-white/10">
        <img
          src="/images/about-me.jpg"
          alt="About Me Image"
          className="h-full w-auto object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </motion.div>
  );
};

export default AboutMeImage;