import React from "react";
import { NavLink } from "react-router-dom";
import "./ImageProfiles.css";
import MesProjets from "../bouton/mesProjets/MesProjets";
import BoxPresentation from "../presentation/BoxPresentation";
import BtnContact from "../bouton/meContacter/BtnContact";
import "../../components/animation.css";

function ImageProfile() {
  return (
    <div className="photo_pres">
      <img className="img" src="moi-removebg-preview.png" alt="moi" />
      <div className="box_btn">
        <BoxPresentation />
        <div className="placement_btn">
          <NavLink to={"/projets"} style={{ textDecoration: "none" }}>
            <MesProjets />
          </NavLink>
          <NavLink to={"/contact"}>
            <BtnContact />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ImageProfile;
