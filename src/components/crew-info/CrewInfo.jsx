import { useState } from "react";
import { crewMembers, fadeTransition } from "../../data";
import "./module.CrewInfo.css";
import { AnimatePresence, motion } from "motion/react";

export default function CrewInfo() {
  const [selectedCrew, setSelectedCrew] = useState(crewMembers[0]);

  // Function to handle the click event on the crew member
  const handleCrewMemberClick = (crew) => {
    setSelectedCrew(crew);
  };

  return (
    <>
      <div className="crewContainer">
        <div className="crewBody">
          <div className="explanation">
            <AnimatePresence mode="wait">
              <motion.div
                className="crewDescription"
                key={selectedCrew.id}
                {...fadeTransition}
              >
                {/* Role and Name */}
                <div className="descHeader">
                  <h3 className="role">{selectedCrew.role}</h3>
                  <h2 className="name">{selectedCrew.name}</h2>
                </div>
                {/* Description */}
                <div className="bioContainer">
                  <p className="bio">{selectedCrew.bio}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Pagination */}
            <nav className="pagination">
              <ul className="crewList">
                {crewMembers.map((crew) => (
                  <li
                    key={crew.id}
                    onClick={() => handleCrewMemberClick(crew)}
                    style={{
                      opacity: crew.id === selectedCrew.id ? 0.8 : 0.174363,
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (crew.id !== selectedCrew.id) {
                        e.currentTarget.style.opacity = 0.5;
                        e.currentTarget.style.transition =
                          "opacity 0.3s ease-in-out";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (crew.id !== selectedCrew.id) {
                        e.currentTarget.style.opacity = 0.174363;
                        e.currentTarget.style.transition =
                          "opacity 0.3s ease-in-out";
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                    >
                      <circle cx="5.5" cy="5" r="5" fill="white" />
                    </svg>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Crew Image */}
      <AnimatePresence mode="wait">
        <motion.figure
          className="crewImageContainer"
          key={selectedCrew.id}
          {...fadeTransition}
        >
          <img
            src={selectedCrew.image}
            alt={selectedCrew.altImage}
            className="crewImage"
          />
        </motion.figure>
      </AnimatePresence>
    </>
  );
}
