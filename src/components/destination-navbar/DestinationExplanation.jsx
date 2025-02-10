import { useState } from "react";
import "./module.DestinationExplanation.css";
import { destinationPlanets } from "../../data.jsx";

export default function DestinationExplanation() {
  const [selectedPlanet, setSelectedPlanet] = useState(destinationPlanets[0]);

  // Function to handle the click event on the planet
  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className="container">
      <div className="imageContainer">
        <figure className="planetImage">
          <img src={selectedPlanet.image} />
        </figure>
      </div>
      <div className="planetInfo">
        <nav className="navigation">
          <ul>
            {destinationPlanets.map((planet) => (
              <li
                key={planet.id}
                onClick={() => handlePlanetClick(planet)}
                className={`tabMenu ${
                  selectedPlanet.id === planet.id ? "active" : ""
                }`}
              >
                <p className="tabText">{planet.navTitle}</p>
              </li>
            ))}
          </ul>
        </nav>
        <div className="planetDescription">
          <h2 className="title">{selectedPlanet.title}</h2>
          <p className="description">{selectedPlanet.description}</p>
        </div>
        <div className="spacer"></div>
        <div className="planetStatistics">
          <div className="distanceContainer">
            <p className="textStat">avg. distance</p>
            <h3 className="distance">{selectedPlanet.distance}</h3>
          </div>
          <div className="travelTimeContainer">
            <p className="textStat">est. travel time</p>
            <h3 className="travelTime">{selectedPlanet.travelTime}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
