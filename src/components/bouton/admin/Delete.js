import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

function Delete({ projetId }) {
  const handleClick = (e) => {
    if (projetId === null) return;
    e.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/api/projets/${projetId}`, {
      withCredentials: true,
    });
    toast.success("Projet supprimé !");
  };

  return (
    <div>
      <button onClick={handleClick} className="selectBtn">
        suppression
      </button>
    </div>
  );
}

export default Delete;
