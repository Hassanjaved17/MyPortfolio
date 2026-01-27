import { useState } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// ALL PROJECTS DATA
const allProjects = [
  {
    name: "Saloon Website",
    year: "June 2025",
    align: "right",
    category: "react",
    image: "/images/saloon-web-img.webp",
    link: "https://dictatewebinane.netlify.app/",
  },
  {
    name: "Jewellery Store",
    year: "May 2025",
    align: "left",
    category: "react",
    image: "/images/jewellery-web-img.webp",
    link: "https://premium-jewellers-hki1.vercel.app/",
  },
  {
    name: "Nexcent Landing Page",
    year: "Oct 2025",
    align: "right",
    category: "html",
    image: "/images/nexcent-web-img.webp",
    link: "https://hassanjaved17.github.io/nexcent-landing-page/",
  },
  {
    name: "Modern Portfolio Website",
    year: "Aug 2025",
    align: "left",
    category: "fullstack",
    image: "/images/demo-portfolio-minimal.webp",
    link: "https://hassanjaved17.github.io/Demo_Portfolio_Assignment/",
  },

  {
    name: "FitZone E-com Store",
    year: "Sep 2025",
    align: "right",
    category: "fullstack",
    image: "/images/fitzone-web-img.webp",
    link: "https://hassanjaved17.github.io/FitZone-E-com-store/",
  },
  {
    name: "Rental Car Landing Page",
    year: "Nov 2025",
    align: "left",
    category: "html",
    image: "/images/rentcars-web-img.webp",
    link: "https://hassanjaved17.github.io/Rent-Car-Landing-Page/",
  },
  {
    name: "Digital Clock",
    year: "May 2025",
    align: "right",
    category: "html",
    image: "/images/digital-clock-web.webp",
    link: "https://hassanjaved17.github.io/Digital-Clock/",
  },
  {
    name: "Neon Calculator",
    year: "June 2025",
    align: "left",
    category: "html",
    image: "/images/neon-calculator-img.webp",
    link: "https://hassanjaved17.github.io/Neon-Calculator/",
  },
];

// FILTER BUTTONS
const filterOptions = [
  { label: "All", value: "all" },
  { label: "HTML / CSS / JS", value: "html" },
  { label: "React JS", value: "react" },
  { label: "Full Stack", value: "fullstack" },
];

// Animation variants for each project
const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const ProjectsMain = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(2);

  // FILTER LOGIC
  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const allShown = visibleCount >= filteredProjects.length;

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      {/* SECTION HEADING */}
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      {/* FILTER BUTTONS */}
      <div className="flex gap-4 justify-center flex-wrap mt-10">
        {filterOptions.map((btn) => (
          <button
            key={btn.value}
            onClick={() => {
              setActiveFilter(btn.value);
              setVisibleCount(2); // reset on filter change
            }}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${activeFilter === btn.value
              ? "bg-cyan text-black"
              : "border-cyan text-cyan hover:bg-cyan hover:text-black"
              }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* PROJECTS LIST */}
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        <AnimatePresence>
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, index) => (
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
              className="text-center text-orange-500 text-lg mt-8"
            >
              No projects found for this filter
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* SEE MORE / SHOW LESS */}
      {filteredProjects.length > 2 && (
        <div className="flex justify-center mt-12">
          {!allShown ? (
            <button
              onClick={() => setVisibleCount((prev) => prev + 2)}
              className="px-6 py-3 rounded-lg text-lg border border-cyan text-cyan hover:bg-cyan hover:text-black transition-all duration-300"
            >
              See More
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(2)}
              className="px-6 py-3 rounded-lg text-lg border border-orange text-orange hover:bg-orange hover:text-black transition-all duration-300"
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
