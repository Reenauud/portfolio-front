import React from "react";
import { NavLink } from "react-router-dom";
import "./CarteProjet.css";

function CarteProjet({ projet, index }) {
  return (
    <div
      className="carte"
      style={{ flexDirection: index % 2 === 0 ? "row-reverse" : null }}
    >
      <div className="image">
        <img
          className="img3"
          src={`${process.env.REACT_APP_API_URL}/${projet.url}`}
        ></img>
      </div>
      <div className="bouton_desc">
        <div className="description">
          <h3 className="desc">{projet.detail}</h3>
        </div>
        <div className="ContainerBtn2">
          <button className="btn2">
            <a href={`${projet.lien}`} target="_blank">
              {" "}
              en savoir plus{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarteProjet;
