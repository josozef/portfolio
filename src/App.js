import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/explorations" element={<Explorations />} />
        <Route path="/explorations/:slug" element={<ExplorationDetail />} />
        
        {/* Legacy Routes - redirect to new structure */}
        <Route path="/K12LearnerJourney" element={<K12LearnerJourney />} />
        <Route path="/AARPChatbot" element={<AARPChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
