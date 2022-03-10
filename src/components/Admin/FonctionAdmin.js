import Select from "../bouton/admin/Select";
import Delete from "../bouton/admin/Delete";
import Modify from "../bouton/admin/Modify";

function FonctionAdmin({ projet, setProjet }) {
  return (
    <div>
      <Select setProjet={setProjet} />
      <Delete projetId={projet?.id} />
      <Modify projetId={projet?.id} projet={projet} />
    </div>
  );
}

export default FonctionAdmin;
