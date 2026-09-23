import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleCertificate = ({ name, issuer, date, image, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="flex flex-col rounded-xl overflow-hidden border border-white/20 bg-black/40 hover:scale-105 transform transition-all duration-500"
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`View full size ${name} certificate`}
          className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200 group cursor-zoom-in"
        >
          <div className="w-full h-full bg-black/40 absolute top-0 left-0 opacity-100 group-hover:opacity-0 transition-all duration-500 z-10"></div>
          <img
            src={image}
            alt={`${name} certificate`}
            className="w-full h-full object-contain p-2"
            loading="lazy"
            decoding="async"
          />
        </button>

        <div className="p-5 flex flex-col gap-1">
          <h3 className="text-xl text-orange font-bold">{name}</h3>
          <p className="text-white/80 text-sm">{issuer}</p>
          <p className="text-white/50 text-sm font-special">{date}</p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-lg flex gap-2 items-center text-orange hover:text-white transition-all duration-500 cursor-pointer w-fit"
          >
            View Credential <BsFillArrowUpRightCircleFill />
          </a>
        </div>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] bg-[#0a0a0a]/90 flex items-center justify-center p-4 sm:p-8"
              onClick={() => setIsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close certificate preview"
                className="absolute top-5 right-5 text-3xl text-white/80 hover:text-orange transition-all duration-300 z-10"
              >
                <IoMdClose />
              </button>

              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                src={image}
                alt={`${name} certificate — full size`}
                onClick={(e) => e.stopPropagation()}
                className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl bg-neutral-200"
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default SingleCertificate;