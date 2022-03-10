import axios from "axios";
import React from "react";

function Delete({ projetId }) {
  const handleClick = (e) => {
    if (projetId === null) return;
    e.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/api/projets/${projetId}`);
  };

  return (
    <div>
      <button onClick={handleClick}> suppression</button>
    </div>
  );
}

export default Delete;
