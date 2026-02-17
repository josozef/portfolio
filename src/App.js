import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudy from "./pages/CaseStudy";
import Explorations from "./pages/Explorations";
import ExplorationDetail from "./pages/ExplorationDetail";

// Legacy routes - keep for backwards compatibility
import K12LearnerJourney from "./pages/K12LearnerJourney";
import AARPChatBot from "./pages/AARPChatbot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/explorations" element={<Explorations />} />
        <Route path="/explorations/:slug" element={<ExplorationDetail />} />

        {/* Legacy redirects */}
        <Route path="/K12LearnerJourney" element={<K12LearnerJourney />} />
        <Route path="/AARPChatbot" element={<AARPChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
