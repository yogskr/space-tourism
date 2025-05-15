import { useState } from "react";
import { technologyItems } from "../../data";
import "./module.TechnologyInfo.css";

export default function TechnologyInfo() {
  const [selectedTech, setSelectedTech] = useState(technologyItems[0]);

  // Function to handle the click event on the technology item
  const handleTechItemClick = (tech) => {
    setSelectedTech(tech);
  };

  return (
    <div className="technologyContainer">
      <figure className="techImageContainer">
        <img
          className="techImage"
          src={selectedTech.imageMobile}
          alt={selectedTech.altImage}
        />
      </figure>
      <div className="technologyInfo">
        {/* Pagination */}
        <nav className="techPagination">
          <ul className="techList">
            {technologyItems.map((tech) => (
              <li
                key={tech.id}
                onClick={() => handleTechItemClick(tech)}
                style={{
                  backgroundColor:
                    tech.id === selectedTech.id ? "white" : "transparent",
                  color: tech.id === selectedTech.id ? "black" : "white",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (tech.id !== selectedTech.id) {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "black";
                    e.currentTarget.style.transition =
                      "background-color 0.3s ease-in-out";
                  }
                }}
                onMouseLeave={(e) => {
                  if (tech.id !== selectedTech.id) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transition =
                      "background-color 0.3s ease-in-out";
                  }
                }}
                className="techListItem"
              >
                <span className="techNumber">{tech.id}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
