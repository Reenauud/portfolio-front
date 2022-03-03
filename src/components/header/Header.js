import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="head">
      <div className="nom_style">
        <h1 className="nom">raymond renaud</h1>
      </div>
      <div className="cv_style">
        <h1 className="cv">Accédez a mon cv</h1>
      </div>
    </div>
  );
}

export default Header;
