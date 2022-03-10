import axios from "axios";
import React, { useState, useEffect } from "react";

function Select({ setProjet }) {
  const [projets, setProjets] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projets`)
      .then((response) => setProjets(response.data));
  }, []);

  return (
    <select onChange={(e) => setProjet(JSON.parse(e.target.value))}>
      <option default="selected" value="">
        select projects
      </option>
      {projets?.map((projet) => (
        <option value={JSON.stringify(projet)}>{projet.title}</option>
      ))}
    </select>
  );
}

export default Select;
