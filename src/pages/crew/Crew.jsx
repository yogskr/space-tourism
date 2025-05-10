import "./module.Crew.css";
import CrewInfo from "../../components/crew-info/CrewInfo";

export default function Crew() {
  return (
    <div className="mainContent">
      <div className="crewContent">
        <div className="pageTitle">
          <h2 className="titleNumber">02</h2>
          <h2 className="titleText">MEET YOUR CREW</h2>
        </div>
        {/* Explanation */}
        <CrewInfo />
      </div>
    </div>
  );
}
