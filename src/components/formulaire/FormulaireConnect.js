import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormulaireConnect({ setUserco }) {
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
        console.log(response);
        if (response.status === 200) {
          setUserco(response.data.id);
          navigate("/admin");
        }
      } catch (err) {
        alert("Error");
      }
    } else {
      alert("renseigner une valeur");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default FormulaireConnect;
