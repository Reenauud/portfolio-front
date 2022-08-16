import axios from "axios";
import React from "react";
import "./Select.css";
import { toast } from "react-toastify";

function Modify({ projet, projetId }) {
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/projets/${projetId}`,
        { projet },
        { withCredentials: true }
      )
      .then((response) => response.data);
    toast.success("Projet modifié !");
  };

  return (
    <div>
      <button onClick={handleClick} className="selectBtn">
        modifier
      </button>
    </div>
  );
}

export default Modify;
