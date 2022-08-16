import FonctionAdmin from "../components/Admin/FonctionAdmin";
import FormulaireAdd from "../components/formulaire/FormulaireAdd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/AdminPage.css";
import { IoIosHome } from "react-icons/io";

function AdminPage() {
  const [projet, setProjet] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/user`, {
        withCredentials: true,
      })

      .catch((error) => {
        navigate("/");
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/auth/refreshToken`, {
        withCredentials: true,
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <div className="icone">
        <IoIosHome className="backicone" onClick={handleClick} />
      </div>
      <div className="titre">
        <h1> Bienvenue sur la page Administrateur</h1>
      </div>
      <FonctionAdmin projet={projet} setProjet={setProjet} />
      <FormulaireAdd projet={projet} setProjet={setProjet} />
    </div>
  );
}

export default AdminPage;
