import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Certificates", section: "certificates" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul
      className="flex lg:flex-row sm:flex-col gap-6 text-white font-body
                 lg:relative lg:top-auto lg:left-auto lg:translate-x-0 lg:w-auto lg:bg-transparent lg:border-none lg:shadow-none lg:rounded-none lg:p-0
                 sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%]
                 text-center lg:text-md sm:text-xl
                 sm:bg-black/80 sm:border sm:border-orange/20 backdrop-blur-lg
                 sm:w-[92%] sm:max-w-[360px] sm:mx-auto sm:rounded-2xl sm:shadow-cyanShadow
                 py-4"
    >
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;