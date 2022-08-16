import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FormulaireConnect.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const msgErrorConnect = toast.error("Email ou mot de passe incorrect !");

function FormulaireConnect() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/login`,
          {
            email: email,
            password: password,
          },
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          navigate("/admin");
          // const msgConnect = toast.success("Vous êtes connecté !");
          // msgConnect();
          toast.success("Vous êtes connecté !");
        }
      } catch (err) {
        toast.error("Email ou mot de passe incorrect !");
      }
    } else {
      toast.error("Veuillez remplir tous les champs !");
    }
  };
  return (
    <div className="ContainerFormCo">
      <form onSubmit={onSubmit} className="formulairedeco">
        <input
          type="text"
          placeholder="Email"
          className=" inputCo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="password"
          className=" inputCo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <input type="submit" className="subbutton"></input>
      </form>
    </div>
  );
}

export default FormulaireConnect;
