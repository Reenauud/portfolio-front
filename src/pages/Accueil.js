import React from "react";
import BtnContact from "../components/bouton/meContacter/BtnContact";
import Header from "../components/header/Header";
import Image_profile from "../components/image/Image_profile";
import "./Accueil.css";
import BoxPresentation from "../components/presentation/BoxPresentation";
import MesProjets from "../components/bouton/mesProjets/MesProjets";
import { NavLink } from "react-router-dom";
import Connexion from "../components/bouton/connexion/Connexion";

function Accueil() {
  return (
    <div>
      <Header />
      <NavLink to={"/connect"}>
        <Connexion />
      </NavLink>
      <Image_profile />
      <div className="box_btn">
        <BoxPresentation />
        <div className="placement_btn">
          <NavLink to={"/projets"} style={{ textDecoration: "none" }}>
            <MesProjets />
          </NavLink>
        </div>
      </div>
      <NavLink to={"/contact"}>
        <BtnContact />
      </NavLink>
    </div>
  );
}

export default Accueil;
