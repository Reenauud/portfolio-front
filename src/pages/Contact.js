import React from "react";
import Formulaire from "../components/formulaire/Formulaire";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Projets.css";
import Footer from "../components/footer/Footer";
function Contact() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="icone">
        <IoIosHome className="backicone" onClick={handleClick} />
      </div>
      <Formulaire />
      <Footer />
    </div>
  );
}

export default Contact;
