import SkillsText from "./SkillsText";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiFirebase, SiPostman, SiRedux, SiAxios } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  // Frontend
  { name: "HTML5", icon: FaHtml5, category: "Frontend", color: "#e34f26" },
  { name: "CSS3", icon: FaCss3Alt, category: "Frontend", color: "#1572b6" },
  { name: "JavaScript", icon: IoLogoJavascript, category: "Frontend", color: "#f7df1e" },
  { name: "ReactJS", icon: FaReact, category: "Frontend", color: "#61dafb" },
  { name: "Redux", icon: SiRedux, category: "Frontend", color: "#764abc" },
  { name: "TailwindCSS", icon: RiTailwindCssFill, category: "Frontend", color: "#38bdf8" },
  { name: "Bootstrap", icon: FaBootstrap, category: "Frontend", color: "#7952b3" },
  // Backend
  { name: "NodeJS", icon: FaNodeJs, category: "Backend", color: "#68a063" },
  { name: "ExpressJS", icon: SiExpress, category: "Backend", color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, category: "Backend", color: "#47a248" },
  { name: "Firebase", icon: SiFirebase, category: "Backend", color: "#ffca28" },
  // Tools
  { name: "Git", icon: FaGitAlt, category: "Tools", color: "#f05032" },
  { name: "GitHub", icon: FaGithub, category: "Tools", color: "#ffffff" },
  { name: "Postman", icon: SiPostman, category: "Tools", color: "#ff6c37" },
  { name: "Axios", icon: SiAxios, category: "Tools", color: "#5a29e4" },
  // ── Add more below as you learn ──
  // { name: "TypeScript",  icon: SiTypescript,      category: "Frontend", color: "#3178c6" },
  // { name: "Next.js",     icon: SiNextdotjs,       category: "Frontend", color: "#ffffff" },
];

const SkillsMain = () => {
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                name={skill.name}
                icon={skill.icon}
                category={skill.category}
                color={skill.color}
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8 mb-4 text-xs text-gray-600 tracking-widest uppercase">
          {skills.length} Technologies & Growing
        </p>

      </div>
    </div>
  );
};

export default SkillsMain;