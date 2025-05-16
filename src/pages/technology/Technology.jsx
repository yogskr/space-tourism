import "../technology/module.Technology.css";
import TechnologyInfo from "../../components/technology-info/TechnologyInfo";

export default function Technology() {
  return (
    <div className="mainTechContent">
      <div className="technologyContent">
        <div className="pageTitle">
          <h2 className="titleNumber">03</h2>
          <h2 className="titleText">SPACE LAUNCH 101</h2>
        </div>
      </div>
      {/* Explanation */}
      <TechnologyInfo />
    </div>
  );
}
