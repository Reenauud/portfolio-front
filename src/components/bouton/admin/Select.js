import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Select.css";

function Select({ setProjet }) {
  const [projets, setProjets] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projets`)
      .then((response) => setProjets(response.data));
  }, []);

  return (
    <select
      onChange={(e) => setProjet(JSON.parse(e.target.value))}
      className="selectBtn"
    >
      <option default="selected" value="">
        selectionne un projet
      </option>
      {projets?.map((projet) => (
        <option key={projet.id} value={JSON.stringify(projet)}>
          {projet.title}
        </option>
      ))}
    </select>
  );
}

export default Select;
