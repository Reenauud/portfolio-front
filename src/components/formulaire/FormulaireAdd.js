import axios from "axios";
import React, { useState } from "react";
import "../formulaire/FormulaireAdd.css";
import { toast } from "react-toastify";
import Delete from "../bouton/admin/Delete";
import Modify from "../bouton/admin/Modify";

function FormulaireAdd({ projet, setProjet }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [lien, setLien] = useState("");
  const [images, setImages] = useState("");
  const handleFile = (e) => {
    setImages({ file: e.target.files[0] });
  };

  const onClick = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("data", JSON.stringify({ title, detail, lien }));
    formdata.append("file", images.file);

    if (title && detail && lien) {
      axios.post(`${process.env.REACT_APP_API_URL}/api/projets`, formdata, {
        withCredentials: true,
      });
      toast.success("Projet ajouté !");
    } else {
      toast.error("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div className="ContainerForm">
      <form
        onSubmit={onClick}
        method=" post "
        encType=" multipart/form-data "
        className=" formProjet"
      >
        <input
          type="text"
          placeholder="titre"
          className=" inputProjet"
          value={projet ? projet.title : title}
          onChange={
            projet
              ? (e) => setProjet({ ...projet, title: e.target.value })
              : (e) => setTitle(e.target.value)
          }
        />
        <input
          type="text"
          placeholder="details"
          className=" inputProjet"
          value={projet ? projet.detail : detail}
          onChange={
            projet
              ? (e) => setProjet({ ...projet, detail: e.target.value })
              : (e) => setDetail(e.target.value)
          }
        />
        <input
          type="text"
          placeholder="lien"
          className=" inputProjet"
          value={projet ? projet.lien : lien}
          onChange={
            projet
              ? (e) => setProjet({ ...projet, lien: e.target.value })
              : (e) => setLien(e.target.value)
          }
        />
        <input
          type="file"
          placeholder="image"
          onChange={handleFile}
          className="uploadImg"
        />
        <div className="boxBtnAdmin">
          <input type="submit" value="ajouté" className="submitProjet" />
          <Delete projetId={projet?.id} />
          <Modify projetId={projet?.id} projet={projet} />
        </div>
      </form>
    </div>
  );
}

export default FormulaireAdd;
