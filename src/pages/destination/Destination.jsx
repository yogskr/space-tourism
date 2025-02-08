import "./module.Destination.css";

export default function Destination() {
  return (
    <>
      <div className="destinationContainer">
        <div className="destinationContent">
          <div className="pageTitle">
            <h2 className="titleNumber">01</h2>
            <h2 className="titleText">PICK YOUR DESTINATION</h2>
          </div>
          <div className="destinationImage"></div>
          <div className="destinationExplanation">
            <nav className="explanationNavigation">
              <ul>
                <li>
                  <p>MOON</p>
                </li>
                <li>
                  <p>MARS</p>
                </li>
                <li>
                  <p>EUROPA</p>
                </li>
                <li>
                  <p>TITAN</p>
                </li>
              </ul>
            </nav>
            <h3 className="explanationTitle">MOON</h3>
            <p className="explanationText">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
