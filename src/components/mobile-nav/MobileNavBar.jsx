import "./module.MobileNavBar.css";

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Import navigation link data
import { links } from "./data";

// Import hamburger icon
import { Spin as Hamburger } from "hamburger-react";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

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
      </nav>

      {/* Navigation menu mobile */}
      {isNavOpen && (
        <aside className="navMenuContainer">
          <div className="closeButtonContainer"></div>
          <ul className="navLinks">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `linkState ${isActive ? "active" : ""}`
                  }
                  style={{
                    borderRight:
                      location.pathname === link.path
                        ? "3px solid #fff"
                        : "none",
                  }}
                >
                  <div className="linkContent">
                    <span className="linkNumber">{link.number}</span>
                    <p className="linkText">{link.title}</p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
}
