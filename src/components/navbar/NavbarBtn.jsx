import { FiDownload } from "react-icons/fi";


const NavbarBtn = () => {
  return (
    <a
      href="/resume.pdf"
      download="HassanResume.pdf"
      target="_blank" 
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      Resume
      <div className="sm:hidden md:block">
      <FiDownload />

      </div>
    </a>
  );
};

export default NavbarBtn;
