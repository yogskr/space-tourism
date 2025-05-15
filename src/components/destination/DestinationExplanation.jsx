import { useState } from "react";
import "./module.DestinationExplanation.css";
import { destinationPlanets, fadeTransition } from "../../data";
import { AnimatePresence, motion } from "motion/react";

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
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedPlanet.id}
              src={selectedPlanet.image}
              alt={selectedPlanet.title}
              {...fadeTransition}
            />
          </AnimatePresence>
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
        <AnimatePresence mode="wait">
          <motion.div
            className="planetDescription"
            key={selectedPlanet.id}
            {...fadeTransition}
          >
            <h2 className="title">{selectedPlanet.title}</h2>
            <p className="description">{selectedPlanet.description}</p>
          </motion.div>
        </AnimatePresence>
        <div className="spacer"></div>
        <div className="planetStatistics">
          <div className="distanceContainer">
            <p className="textStat">avg. distance</p>
            <AnimatePresence mode="wait">
              <motion.h3
                className="distance"
                key={selectedPlanet.id}
                {...fadeTransition}
              >
                {selectedPlanet.distance}
              </motion.h3>
            </AnimatePresence>
          </div>
          <div className="travelTimeContainer">
            <p className="textStat">est. travel time</p>
            <AnimatePresence mode="wait">
              <motion.h3
                className="travelTime"
                key={selectedPlanet.id}
                {...fadeTransition}
              >
                {selectedPlanet.travelTime}
              </motion.h3>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
