import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

// Import components
import MobileNavBar from "./components/mobile-nav/MobileNavBar";

// Import page components
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";

// eslint-disable-next-line react/prop-types
const BackgroundWrapper = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setBackgroundImage("/assets/home/background-home-tablet.jpg");
        break;
      case "/pages/destination":
        setBackgroundImage(
          "/assets/destination/background-destination-tablet.jpg"
        );
        break;
      case "/pages/crew":
        setBackgroundImage("/assets/crew/background-crew-tablet.jpg");
        break;
      case "/pages/technology":
        setBackgroundImage(
          "/assets/technology/background-technology-tablet.jpg"
        );
        break;
      default:
        setBackgroundImage("");
    }
  }, [location.pathname]);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <BackgroundWrapper>
        <main>
          <MobileNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/destination" element={<Destination />} />
            <Route path="/pages/crew" element={<Crew />} />
            <Route path="/pages/technology" element={<Technology />} />
          </Routes>
        </main>
      </BackgroundWrapper>
    </Router>
  );
}
