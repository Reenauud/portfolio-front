import axios from "axios";
import React, { useState, useEffect } from "react";
import "./CarteProjet.css";

function CarteProjet() {
  return (
    <div className="carte">
      <div className="image">
        <img className="img3" src=""></img>
      </div>
      <div className="bouton_desc">
        <div className="description">
          <h3 className="desc">{projet[0]?.detail}</h3>
        </div>
        <div>
          <button className="btn2">voir plus</button>
        </div>
      </div>
    </div>
  );
}

export default CarteProjet;
