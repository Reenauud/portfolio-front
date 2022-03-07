import React, { useState, useEffect } from "react";
import CarteProjet from "../components/carte_projet/CarteProjet";
import axios from "axios";

function Projets() {
  const [projet, setProjet] = useState([]);

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
      {projet.map((projet, index) => {
        return <CarteProjet projet={projet} index={index} />;
      })}
    </div>
  );
}

export default Projets;
