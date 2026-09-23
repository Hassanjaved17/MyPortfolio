import { Link } from "react-scroll";
import { FiArrowUpRight } from "react-icons/fi";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Core Stacks" },
];

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <span className="text-cyan text-sm uppercase tracking-[0.2em] mb-3">Get to know me</span>
      <h2 className="text-5xl md:text-6xl font-bold text-orange mb-8">About Me</h2>

      <p className="text-lightGrey leading-relaxed text-lg max-w-xl">
        I'm Hassan Javed, a passionate web developer with a focus on creating
        clean, modern, and user-friendly websites. Skilled in HTML, CSS,
        JavaScript, React, and Tailwind CSS, I enjoy turning ideas into
        interactive digital experiences. Always eager to learn and explore new
        technologies, I aim to deliver creative solutions that blend
        functionality with style.
      </p>

      <div className="flex flex-wrap gap-6 mt-8 md:justify-start justify-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col md:items-start items-center">
            <span className="text-3xl font-bold text-orange">{stat.value}</span>
            <span className="text-xs uppercase tracking-widest text-lightGrey">{stat.label}</span>
          </div>
        ))}
      </div>

      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to="projects"
        className="border border-orange rounded-full py-3 px-6 text-lg font-bold flex gap-2 items-center mt-10 text-white hover:bg-orange transition-all duration-500 cursor-pointer md:self-start self-center group w-fit"
      >
        My Projects
        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </div>
  );
};

export default AboutMeText;