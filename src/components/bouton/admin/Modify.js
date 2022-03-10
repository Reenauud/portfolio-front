import axios from "axios";
import React from "react";

function Modify({ projet, projetId }) {
  const handleClick = (e) => {
    e.preventDefault();
    alert("le projet a été modifié");
    axios.put(
      `${process.env.REACT_APP_API_URL}/api/projets/${projetId}`,
      projet
    );
  };

  return (
    <div>
      <button onClick={handleClick}>modifier</button>
    </div>
  );
}

export default Modify;
