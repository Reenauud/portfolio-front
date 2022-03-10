import axios from "axios";
import React, { useState } from "react";

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

    try {
      const formdata = new FormData();
      formdata.append("data", JSON.stringify({ title, detail, lien }));
      formdata.append("file", images.file);

      axios.post(`${process.env.REACT_APP_API_URL}/api/projets`, formdata);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={onClick} method=" post " enctype=" multipart/form-data ">
        <input
          type="text"
          placeholder="titre"
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
          value={projet ? projet.detail : detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <input
          type="text"
          placeholder="lien"
          value={projet ? projet.lien : lien}
          onChange={(e) => setLien(e.target.value)}
        />
        <input type="file" placeholder="image" onChange={handleFile} />
        <input type="submit" value="ajouté" />
      </form>
    </div>
  );
}

export default FormulaireAdd;
