import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Image_profiles.css";
import MesProjets from "../bouton/mesProjets/MesProjets";
import BoxPresentation from "../presentation/BoxPresentation";
import BtnContact from "../bouton/meContacter/BtnContact";
import "../../components/animation.css";

function Image_profile() {
  const [clique, setClique] = useState(false);
  const handleClick = () => {
    setClique(!clique);
  };

  console.log(clique);
  return (
    <div className="photo_pres">
      <img className="img" src="moi-removebg-preview.png"></img>
    </div>
  );
}

export default Image_profile;
