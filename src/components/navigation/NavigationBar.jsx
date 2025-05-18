import "./module.NavigationBar.css";
import { useState } from "react";
import NavigationLinks from "./NavLinks";
import { AnimatePresence, motion } from "motion/react";
import { Spin as Hamburger } from "hamburger-react";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="mobileMenu">
          <img
            className="logoIcon"
            src="/assets/shared/logo.svg"
            alt="Space Tourism logo"
          />
          <div className="hamburger">
            <Hamburger
              size={30}
              color="#fff"
              toggled={isNavOpen}
              toggle={setIsNavOpen}
            />
          </div>
        </div>
        {/* Navigation Menu Tablet */}
        <div className="navMenuTablet">
          <NavigationLinks />
        </div>
      </nav>
      {/* Navigation Menu Mobile */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.aside
            className="navMenuMobile"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
            }}
          >
            <div className="closeButtonContainer"></div>
            <NavigationLinks />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
