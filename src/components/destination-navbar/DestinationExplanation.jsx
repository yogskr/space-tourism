import { useState } from "react";
import "./module.DestinationExplanation.css";
import { destinationPlanets } from "../../data.jsx";

export default function DestinationExplanation() {
  const [selectedPlanet, setSelectedPlanet] = useState(destinationPlanets[0]);
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
                className="navLink"
                key={planet.id}
                onClick={() => handlePlanetClick(planet)}
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
        <div className="planetStatistics">
          <p className="textStat">AVG. DISTANCE</p>
          <h3 className="distance">{selectedPlanet.distance}</h3>
          <p className="textStat">EST. TRAVEL TIME</p>
          <h3 className="travelTime">{selectedPlanet.travelTime}</h3>
        </div>
      </div>
    </div>
  );
}
