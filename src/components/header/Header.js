import React from "react";
import "./Header.css";
import Connexion from "../bouton/connexion/Connexion";

function Header() {
  return (
    <div className="head">
      <div className="nom_style">
        <h1 className="nom">RAYMOND Renaud</h1>
      </div>

      <div className="cv_style">
        <a
          href="https://www.linkedin.com/posts/renaud-raymond-980114223_cv-raymond-renaud-activity-6874714807161896960-kltV?utm_source=linkedin_share&utm_medium=member_desktop_web"
          target="_blank"
          rel="noopener noreferrer"
        >
          accedez a mon cv
        </a>
      </div>
    </div>
  );
}

export default Header;
