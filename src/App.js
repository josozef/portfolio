import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import K12LearnerJourney from "./Pages/K12LearnerJourney";
import AARPChatBot from "./Pages/AARPChatbot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/K12LearnerJourney" element={<K12LearnerJourney />} />
          <Route path="/AARPChatbot" element={<AARPChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
