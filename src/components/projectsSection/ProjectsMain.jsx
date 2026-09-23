import { useState } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const allProjects = [
  {
    name: "SpendSmart",
    year: "Mar 2026",
    category: "fullstack",
    image: "/images/spendsmart-img.webp",
    link: "https://spend-smart-sandy.vercel.app/",
  },
  {
    name: "Assets Manager",
    year: "July 2026",
    category: "fullstack",
    image: "/images/maintainiq.webp",
    link: "https://maintain-iq-hub.lovable.app/",
  },
  {
    name: "Quote Vault",
    year: "Mar 2026",
    category: "fullstack",
    image: "/images/quote-vault-img.webp",
    link: "https://hassanjaved17.github.io/Firebase-Quote-App/",
  },
  {
    name: "Firebase Auth App",
    year: "Mar 2026",
    category: "fullstack",
    image: "/images/firebase-auth-img.webp",
    link: "https://hassanjaved17.github.io/Firebase-auth-app/",
  },
  {
    name: "Saloon Website",
    year: "June 2025",
    category: "react",
    image: "/images/saloon-web-img.webp",
    link: "https://dictatewebinane.netlify.app/",
  },
  {
    name: "Jewellery Store",
    year: "May 2025",
    category: "react",
    image: "/images/jewellery-web-img.webp",
    link: "https://premium-jewellers-hki1.vercel.app/",
  },
  {
    name: "Medicare Elite Website",
    year: "Feb 2026",
    category: "html",
    image: "/images/medicareelite.webp",
    link: "https://medi-care-elite-prime.vercel.app/",
  },
  {
    name: "Iron Forge Gym Website",
    year: "March 2026",
    category: "html",
    image: "/images/ironforge.webp",
    link: "https://iron-forge-gym-bars.vercel.app/",
  },
  {
    name: "FitZone E-com Store",
    year: "Sep 2025",
    category: "html",
    image: "/images/fitZone.webp",
    link: "https://fit-zone-e-com-store.vercel.app/",
  },
  {
    name: "EduPeak Academy Website",
    year: "Apr 2026",
    category: "html",
    image: "/images/edupeak.webp",
    link: "https://edu-peak-academy.vercel.app/",
  },
  {
    name: "Blvck Blade Hair Salon Website",
    year: "May 2026",
    category: "html",
    image: "/images/blackBlade.webp",
    link: "https://blvck-blade-premium.vercel.app/",
  },
  {
    name: "Nexcent Landing Page",
    year: "Oct 2025",
    category: "html",
    image: "/images/nexcent-web-img.webp",
    link: "https://hassanjaved17.github.io/nexcent-landing-page/",
  },
  {
    name: "Modern Portfolio Website",
    year: "Aug 2025",
    category: "html",
    image: "/images/demo-portfolio-minimal.webp",
    link: "https://hassanjaved17.github.io/Demo_Portfolio_Assignment/",
  },
  {
    name: "Rental Car Landing Page",
    year: "Nov 2025",
    category: "html",
    image: "/images/rentcars-web-img.webp",
    link: "https://hassanjaved17.github.io/Rent-Car-Landing-Page/",
  },
  {
    name: "Digital Clock",
    year: "May 2025",
    category: "html",
    image: "/images/digital-clock-web.webp",
    link: "https://hassanjaved17.github.io/Digital-Clock/",
  },
  {
    name: "Neon Calculator",
    year: "June 2025",
    category: "html",
    image: "/images/neon-calculator-img.webp",
    link: "https://hassanjaved17.github.io/Neon-Calculator/",
  },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "HTML / CSS / JS", value: "html" },
  { label: "React JS", value: "react" },
  { label: "Full Stack", value: "fullstack" },
];

const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const ProjectsMain = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(2);

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount).map((p, i) => ({
    ...p,
    align: i % 2 === 0 ? "left" : "right",
  }));
  const allShown = visibleCount >= filteredProjects.length;

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex gap-4 justify-center flex-wrap mt-10">
        {filterOptions.map((btn) => (
          <button
            key={btn.value}
            onClick={() => {
              setActiveFilter(btn.value);
              setVisibleCount(2);
            }}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${activeFilter === btn.value
                ? "bg-orange text-white border-orange"
                : "border-orange text-orange hover:bg-orange hover:text-white"
              }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        <AnimatePresence>
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project) => (
              <motion.div
                key={project.name}
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <SingleProject
                  name={project.name}
                  year={project.year}
                  align={project.align}
                  image={project.image}
                  link={project.link}
                />
              </motion.div>
            ))
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-orange text-lg mt-8"
            >
              No projects found for this filter.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {filteredProjects.length > 2 && (
        <div className="flex justify-center mt-12">
          {!allShown ? (
            <button
              onClick={() => setVisibleCount((prev) => prev + 2)}
              className="px-6 py-3 rounded-lg text-lg border border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300"
            >
              See More
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(2)}
              className="px-6 py-3 rounded-lg text-lg border border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectsMain;