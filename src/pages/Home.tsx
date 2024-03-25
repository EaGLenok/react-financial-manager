import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
