import React, { useState } from "react";
import CarteProjet from "../components/carte_projet/CarteProjet";
import Carte from "../components/carte_projet/Carte2";
import axios from "axios";

function Projets() {
  const [projet, setProjet] = useState("");

  axios
    .get(`${process.env.REACT_APP_API_URL}/api/projets`)
    .then((response) => response.data)
    .then((data) => {
      setProjet(data);
    });

  return (
    <div>
      <CarteProjet />
      <Carte />
    </div>
  );
}

export default Projets;
