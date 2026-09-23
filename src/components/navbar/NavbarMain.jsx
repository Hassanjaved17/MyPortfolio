import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import ThemeToggle from "../ThemeToggle";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black/60 backdrop-blur-xl items-center px-4 py-4 lg:px-6 lg:py-4 rounded-r-full rounded-l-full border-orange/30 border-[0.5px] transition-colors duration-500">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <div className="flex items-center gap-2 lg:gap-3">
          <ThemeToggle />
          <NavbarBtn />
          <div className="lg:hidden">
            <NavbarToggler />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;