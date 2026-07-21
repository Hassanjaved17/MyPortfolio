import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleCertificate = ({ name, issuer, date, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col rounded-xl overflow-hidden border border-white/20 bg-black/40 hover:scale-105 transform transition-all duration-500"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200 group">
        <div className="w-full h-full bg-black/40 absolute top-0 left-0 opacity-100 group-hover:opacity-0 transition-all duration-500 z-10"></div>
        <img
          src={image}
          alt={`${name} certificate`}
          className="w-full h-full object-contain p-2"
        />
      </div>

      <div className="p-5 flex flex-col gap-1">
        <h3 className="text-xl text-orange font-bold">{name}</h3>
        <p className="text-white/80 text-sm">{issuer}</p>
        <p className="text-white/50 text-sm font-special">{date}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-lg flex gap-2 items-center text-[#f59e0b] hover:text-white transition-all duration-500 cursor-pointer w-fit"
        >
          View Credential <BsFillArrowUpRightCircleFill />
        </a>
      </div>
    </motion.div>
  );
};

export default SingleCertificate;