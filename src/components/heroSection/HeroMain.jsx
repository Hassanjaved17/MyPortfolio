import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import { Link } from "react-scroll";
import { FiChevronDown } from "react-icons/fi";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16 relative">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4 gap-12">
        <HeroText />
        <HeroPic />
      </div>

      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
        className="hidden md:flex absolute left-[50%] -translate-x-[50%] bottom-[-20px] flex-col items-center gap-1 text-lightGrey cursor-pointer hover:text-orange transition-colors duration-300"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <FiChevronDown className="animate-bounce" />
      </Link>
    </div>
  );
};

export default HeroMain;