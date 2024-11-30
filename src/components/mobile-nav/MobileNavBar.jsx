import "./module.NavBar.css";

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Import navigation link data
import { links } from "./data";

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
            <img
              className="hamburgerIcon"
              src="/assets/shared/icon-hamburger.svg"
              alt="Hamburger menu icon"
              onClick={() => {
                setIsNavOpen(!isNavOpen);
              }}
            />
          </div>
        </div>
      </nav>

      {/* Navigation menu mobile */}
      {isNavOpen && (
        <aside className="navMenuContainer">
          <div className="closeButtonContainer">
            <div className="closeButton">
              <img
                className="closeIcon"
                src="/assets/shared/icon-close.svg"
                alt="Close icon"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              />
            </div>
          </div>
          <ul className="navLinks">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `linkState ${isActive ? "active" : "inactive"}`
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
