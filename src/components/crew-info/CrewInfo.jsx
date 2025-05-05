import { useState } from "react";
import { crewMembers } from "../../data";
import "./module.CrewInfo.css";

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
            <div className="crewDescription">
              <div className="descHeader">
                <h3 className="role">{selectedCrew.role}</h3>
                <h2 className="name">{selectedCrew.name}</h2>
              </div>
              <div className="bioContainer">
                <p className="bio">{selectedCrew.bio}</p>
              </div>
            </div>
            <nav className="pagination">
              <ul className="crewList">
                {crewMembers.map((crew) => (
                  <li key={crew.id} onClick={() => handleCrewMemberClick(crew)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                    >
                      <circle
                        opacity="0.174363"
                        cx="5.5"
                        cy="5"
                        r="5"
                        fill="white"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <figure className="crewImageContainer">
        <div className="mask">
          <img
            src={selectedCrew.image}
            alt={selectedCrew.altImage}
            className="crewImage"
          />
        </div>
      </figure>
    </>
  );
}
