import React from "react";
import Header from "../components/header/Header";
import ImageProfile from "../components/image/ImageProfile";
import "./Accueil.css";
import Footer from "../components/footer/Footer";
import Connexion from "../components/bouton/connexion/Connexion";
import { NavLink } from "react-router-dom";

function Accueil() {
  return (
    <div>
      <Header />
      <NavLink to={"/connect"}>
        <Connexion />
      </NavLink>
      <ImageProfile />
      <Footer />
    </div>
  );
}

export default Accueil;
