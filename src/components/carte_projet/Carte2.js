import React from "react";
import "./CarteProjet.css";

function Carte() {
  return (
    <div className="carte2">
      <div className="bouton_desc">
        <div>
          <button className="btn3">voir plus</button>
        </div>
        <div className="description">
          <h3 className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </h3>
        </div>
      </div>
      <div className="image">
        <img className="img3" src="avatar.png"></img>
      </div>
    </div>
  );
}

export default Carte;
