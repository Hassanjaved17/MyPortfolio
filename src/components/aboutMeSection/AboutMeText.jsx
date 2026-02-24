import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">

      <h2 className="text-6xl font-bold text-[#f59e0b] mb-10">About Me</h2>

      <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
        I'm Hassan Javed, a passionate web developer with a focus on creating
        clean, modern, and user-friendly websites. Skilled in HTML, CSS,
        JavaScript, React, and Tailwind CSS, I enjoy turning ideas into
        interactive digital experiences. Always eager to learn and explore new
        technologies, I aim to deliver creative solutions that blend
        functionality with style.
      </p>

      <button className="border border-orange rounded-full py-2 px-6 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center group">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
  
          className="cursor-pointer text-white transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;