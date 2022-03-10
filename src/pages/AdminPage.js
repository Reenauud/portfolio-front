import FonctionAdmin from "../components/Admin/FonctionAdmin";
import FormulaireAdd from "../components/formulaire/FormulaireAdd";
import React, { useState } from "react";

function AdminPage() {
  const [projet, setProjet] = useState(null);

  return (
    <div>
      <FonctionAdmin projet={projet} setProjet={setProjet} />
      <FormulaireAdd projet={projet} setProjet={setProjet} />
    </div>
  );
}

export default AdminPage;
