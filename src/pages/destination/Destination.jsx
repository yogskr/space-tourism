import "./module.Destination.css";
import DestinationExplanation from "../../components/destination/DestinationExplanation.jsx";

export default function Destination() {
  return (
    <div className="mainContent">
      <div className="destinationContent">
        <div className="pageTitle">
          <h2 className="titleNumber">01</h2>
          <h2 className="titleText">PICK YOUR DESTINATION</h2>
        </div>
        {/* Destination Navigation Bar */}
        <DestinationExplanation />
      </div>
    </div>
  );
}
