import { useState } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// ALL PROJECTS
const allProjects = [
  {
    name: "Saloon Website",
    year: "June2025",
    align: "right",
    image: "/images/saloon-web-img.png",
    link: "https://dictatewebinane.netlify.app/",
  },
  {
    name: "Jewellery Store",
    year: "May2025",
    align: "left",
    image: "images/jewellery-web-img.png",
    link: "https://premium-jewellers-hki1.vercel.app/",
  },

  // Add your future projects here
  {
    name: "Modern Portfolio Website",
    year: "Aug2025",
    align: "right",
    image: "images/demo-portfolio-minimal.png",
    link: "https://hassanjaved17.github.io/Demo_Portfolio_Assignment/",
  },
  {
    name: "Nexcent Landing Page",
    year: "Oct2025",
    align: "left",
    image: "/images/nexcent-web-img.png",
    link: "https://hassanjaved17.github.io/nexcent-landing-page/",
  },
  {
    name: "FitZone E-com Store",
    year: "Sep2025",
    align: "right",
    image: "/images/fitzone-web-img.png",
    link: "https://hassanjaved17.github.io/FitZone-E-com-store/",
  },
  {
    name: "Rental Car Landing Page",
    year: "Nov2025",
    align: "left",
    image: "/images/rentcars-web-img.png",
    link: "https://hassanjaved17.github.io/Rent-Car-Landing-Page/",
  },
  {
    name: "Digital Clock",
    year: "May2025",
    align: "Right",
    image: "/images/digital-clock-web.png",
    link: "https://hassanjaved17.github.io/Digital-Clock/",
  },{
    name: "Neon Calculator",
    year: "June2025",
    align: "left",
    image: "/images/neon-calculator-img.png",
    link: "https://hassanjaved17.github.io/Neon-Calculator/",
  },
];

const ProjectsMain = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const handleShowLess = () => {
    setVisibleCount(2); // collapse back to 2
  };

  const allShown = visibleCount >= allProjects.length;

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

      {/* PROJECTS */}
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {allProjects.slice(0, visibleCount).map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center mt-12">

        {!allShown && (
          <button
            onClick={handleSeeMore}
            className="px-6 py-3 rounded-lg text-lg border border-cyan text-cyan hover:bg-cyan hover:text-black transition-all duration-300"
          >
            See More
          </button>
        )}

        {allShown && (
          <button
            onClick={handleShowLess}
            className="px-6 py-3 rounded-lg text-lg border border-orange text-orange hover:bg-orange hover:text-black transition-all duration-300"
          >
            Show Less
          </button>
        )}

      </div>
    </div>
  );
};

export default ProjectsMain;
