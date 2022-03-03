import React from "react";
import Ajout from "../bouton/admin/Ajout";
import Supp from "../bouton/admin/Supp";

function Admin() {
  return (
    <div>
      <h1>ceci et ma page admin</h1>
      <div>
        <Ajout />
        <Supp />
      </div>
    </div>
  );
}

export default Admin;
