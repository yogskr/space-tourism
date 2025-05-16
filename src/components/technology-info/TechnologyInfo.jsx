import { useState } from "react";
import { technologyItems, fadeTransition } from "../../data";
import "./module.TechnologyInfo.css";
import { AnimatePresence, motion } from "motion/react";

export default function TechnologyInfo() {
  const [selectedTech, setSelectedTech] = useState(technologyItems[0]);

  // Function to handle the click event on the technology item
  const handleTechItemClick = (tech) => {
    setSelectedTech(tech);
  };

  return (
    <div className="technologyContainer">
      <AnimatePresence mode="wait">
        <motion.figure
          className="techImageContainer"
          key={selectedTech.id}
          {...fadeTransition}
        >
          <img
            className="techImage"
            src={selectedTech.imageMobile}
            alt={selectedTech.altImage}
          />
        </motion.figure>
      </AnimatePresence>
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
        {/* Explanation */}
        <div className="techDescription">
          <h2 className="techTitle">THE TERMINOLOGY…</h2>
          <AnimatePresence mode="wait">
            <motion.h3
              className="techName"
              key={selectedTech.id}
              {...fadeTransition}
            >
              {selectedTech.name}
            </motion.h3>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              className="techText"
              key={selectedTech.id}
              {...fadeTransition}
            >
              {selectedTech.description}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
