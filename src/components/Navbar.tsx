import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import "../assets/styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-navigation">
        <SignalCellularAltIcon sx={{ fontSize: 35 }} />
        <HomeIcon sx={{ fontSize: 35 }} />
      </div>
    </div>
  );
};

export default Navbar;
