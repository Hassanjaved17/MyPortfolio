import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <button
      className="text-2xl p-3 border border-orange rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center"
      onClick={() => dispatch(toggleMenu())}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isMenuOpen ? (
          <motion.span
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <IoMdClose />
          </motion.span>
        ) : (
          <motion.span
            key="hamburger"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GiHamburgerMenu />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default NavbarToggler;
