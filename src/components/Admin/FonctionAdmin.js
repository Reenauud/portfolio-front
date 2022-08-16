import Select from "../bouton/admin/Select";

import "../Admin/FonctionAdmin.css";

function FonctionAdmin({ projet, setProjet }) {
  return (
    <div className="fonctionAdmin">
      <Select setProjet={setProjet} />
    </div>
  );
}

export default FonctionAdmin;
