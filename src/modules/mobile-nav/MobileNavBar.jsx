import "./module.NavBar.css";
import "./../../index.css";

import { useState } from "react";
import { links } from "./data";
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="mobileMenu">
          <img
            className="logoIcon"
            src="./src/assets/shared/logo.svg"
            alt="Space Tourism logo"
          />
          <div className="hamburger">
            <img
              className="hamburgerIcon"
              src="./src/assets/shared/icon-hamburger.svg"
              alt="Hamburger menu icon"
              onClick={() => {
                setIsNavOpen(!isNavOpen);
              }}
            />
          </div>
        </div>
      </nav>
      {isNavOpen && (
        <aside className="navMenuContainer">
          <div className="closeButtonContainer">
            <div className="closeButton">
              <img
                className="closeIcon"
                src="./src/assets/shared/icon-close.svg"
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
                <div className="linkContainer">
                  <span className="linkNumber">{link.number}</span>
                  <a className="linkText" href={link.path}>
                    {link.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
}
