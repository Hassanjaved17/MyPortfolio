import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
  ];

  const socials = [
    { icon: <FaGithub />, href: "https://github.com/Hassanjaved17", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/hassan-javed-69766b336/", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/hassan_javed_17/", label: "Instagram" },
    { icon: <FaWhatsapp />, href: "https://wa.me/923302479878", label: "WhatsApp" },
  ];

  return (
    <footer className="px-4 mt-24">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange to-transparent mb-10 opacity-40" />

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-10 text-lightGrey">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Hassan Javed
          </h2>

          <p className="text-xs tracking-widest uppercase font-medium text-orange opacity-60">
            MERN Stack Developer
          </p>
          <p className="text-sm text-lightGrey leading-relaxed mt-1">
            Building modern and interactive web experiences with clean code and creative design.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-base font-semibold text-white mb-1 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {footerLinks.map((item) => (
              <li key={item.section}>
                <Link
                  to={item.section}
                  spy smooth duration={500} offset={-120}
                  className="relative text-sm text-lightGrey cursor-pointer transition-colors duration-300
                             hover:text-orange
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[1px] after:w-0 after:bg-orange
                             after:transition-all after:duration-300
                             hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-base font-semibold text-white mb-1 tracking-wide">
            Connect With Me
          </h3>
          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex items-center justify-center w-10 h-10 rounded-xl
                           border border-orange/30
                           bg-orange/5
                           text-lightGrey text-lg
                           transition-all duration-300
                           hover:text-orange
                           hover:border-orange/60
                           hover:bg-orange/10
                           hover:shadow-[0_0_14px_rgb(var(--color-orange)/0.25)]
                           hover:-translate-y-1"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-lightGrey mt-2 opacity-70">
            Let's build something great together.
          </p>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange to-transparent mt-10 opacity-10" />

      <div className="text-center py-6 text-xs text-lightGrey tracking-widest uppercase opacity-60">
        © {new Date().getFullYear()} Hassan Javed · All Rights Reserved
      </div>
    </footer>
  );
};

export default FooterMain;