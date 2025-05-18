import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import { backgroundImages } from "./data";
import { motion, AnimatePresence } from "motion/react";

// Import components
import NavigationBar from "./components/navigation/NavigationBar";

// Import page components
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";

// Helper to get current screen size
function getScreenType() {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    return "desktop";
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    return "tablet";
  } else {
    return "mobile";
  }
}

// Helper to get background image based on path and screen type
function getBackgroundImage(path) {
  const screenType = getScreenType();
  switch (path) {
    case "/":
      return backgroundImages.home[screenType];
    case "/pages/destination":
      return backgroundImages.destination[screenType];
    case "/pages/crew":
      return backgroundImages.crew[screenType];
    case "/pages/technology":
      return backgroundImages.technology[screenType];
    default:
      return "";
  }
}

// eslint-disable-next-line react/prop-types
function BackgroundWrapper({ children }) {
  const [backgroundImage, setBackgroundImage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const updateBackground = () => {
      setBackgroundImage(getBackgroundImage(location.pathname));
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
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
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/pages/destination" element={<Destination />} />
          <Route path="/pages/crew" element={<Crew />} />
          <Route path="/pages/technology" element={<Technology />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <BackgroundWrapper>
        <main>
          <NavigationBar />
          <AnimatedRoutes />
        </main>
      </BackgroundWrapper>
    </Router>
  );
}
