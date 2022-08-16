import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CarteProjet from "../components/carte_projet/CarteProjet";
import axios from "axios";
import { IoIosHome } from "react-icons/io";
import "./Projets.css";
function Projets() {
  const [projet, setProjet] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projets`)
      .then((response) => response.data)
      .then((data) => {
        setProjet(data);
      });
  }, []);

  return (
    <div>
      <div className="icone">
        <IoIosHome className="backicone" onClick={handleClick} />
      </div>

      {projet.map((projet, index, key) => {
        return <CarteProjet projet={projet} index={index} key={projet.id} />;
      })}
    </div>
  );
}

export default Projets;
