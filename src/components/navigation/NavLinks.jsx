import { NavLink, useLocation } from "react-router-dom";
import { links } from "../../data";
import "./module.NavLinks.css";

export default function NavigationLinks() {
  const location = useLocation();

  // Helper to determine border style based on screen size
  const getBorderStyle = (isActive) => {
    if (!isActive) return {};
    const width = window.innerWidth;
    if (width >= 768) {
      // Tablet and desktop: borderBottom
      return { borderBottom: "3px solid #fff", borderRight: "none" };
    }
    // Mobile: borderRight
    return { borderRight: "3px solid #fff", borderBottom: "none" };
  };

  return (
    <ul className="navLinks">
      {links.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `linkState ${isActive ? "active" : ""}`
            }
            style={({ isActive }) =>
              getBorderStyle(isActive && location.pathname === link.path)
            }
          >
            <div className="linkContent">
              <span className="linkNumber">{link.number}</span>
              <p className="linkText">{link.title}</p>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
