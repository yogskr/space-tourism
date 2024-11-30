import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import components
import MobileNavBar from "./components/mobile-nav/MobileNavBar";

// Import page components
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";

export default function App() {
  return (
    <main>
      <Router>
        <MobileNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/destination" element={<Destination />} />
          <Route path="/pages/crew" element={<Crew />} />
          <Route path="/pages/technology" element={<Technology />} />
        </Routes>
      </Router>
    </main>
  );
}
