import { useState } from "react";
import SkillsText from "./SkillsText";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiFirebase, SiPostman, SiRedux, SiAxios } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { name: "HTML5", icon: FaHtml5, category: "Frontend", color: "#e34f26" },
  { name: "CSS3", icon: FaCss3Alt, category: "Frontend", color: "#1572b6" },
  { name: "JavaScript", icon: IoLogoJavascript, category: "Frontend", color: "#f7df1e" },
  { name: "ReactJS", icon: FaReact, category: "Frontend", color: "#61dafb" },
  { name: "Redux", icon: SiRedux, category: "Frontend", color: "#764abc" },
  { name: "TailwindCSS", icon: RiTailwindCssFill, category: "Frontend", color: "#38bdf8" },
  { name: "Bootstrap", icon: FaBootstrap, category: "Frontend", color: "#7952b3" },
  { name: "NodeJS", icon: FaNodeJs, category: "Backend", color: "#68a063" },
  { name: "ExpressJS", icon: SiExpress, category: "Backend", color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, category: "Backend", color: "#47a248" },
  { name: "Firebase", icon: SiFirebase, category: "Backend", color: "#ffca28" },
  { name: "Git", icon: FaGitAlt, category: "Tools", color: "#f05032" },
  { name: "GitHub", icon: FaGithub, category: "Tools", color: "#ffffff" },
  { name: "Postman", icon: SiPostman, category: "Tools", color: "#ff6c37" },
  { name: "Axios", icon: SiAxios, category: "Tools", color: "#5a29e4" },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const SkillsMain = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${activeCategory === cat
                  ? "bg-orange border-orange text-white"
                  : "border-orange/25 text-lightGrey hover:border-orange/60 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          {filteredSkills.map((skill) => (
            <motion.div key={skill.name} variants={cardVariants}>
              <SingleSkill
                name={skill.name}
                icon={skill.icon}
                category={skill.category}
                color={skill.color}
              />
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center mt-8 mb-4 text-xs text-lightGrey tracking-widest uppercase">
          {skills.length} Technologies & Growing
        </p>
      </div>
    </div>
  );
};

export default SkillsMain;