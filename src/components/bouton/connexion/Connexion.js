import React from "react";
import "./Connexion.css";
import { NavLink } from "react-router-dom";

function Connexion() {
  const handleClick = () => {
    <NavLink to={"/connect"}></NavLink>;
  };
  return (
    <div className="plcmCo">
      <button className="btnconnexion" onClick={handleClick}>
        connexion
      </button>
    </div>
  );
}

export default Connexion;
