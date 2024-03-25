import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Investments from "./pages/Investments";
import "./assets/styles/all.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/investments" element={<Investments />} />
      </Routes>
    </Router>
  );
}

export default App;
