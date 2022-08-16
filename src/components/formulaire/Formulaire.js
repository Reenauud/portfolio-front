import React, { useState } from "react";
import "./Formulaire.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Recaptcha from "react-recaptcha";

function Formulaire() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [verify, setVerify] = useState(false);

  const msgSend = () => toast.success("Merci pour votre message !");
  const humanVerify = () =>
    toast.error("Veuillez cocher la case pour valider que vous êtes humain !");

  const verifyCallback = () => {
    setVerify(true);
  };

  const onloadCallback = () => {
    console.log("Done");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!verify) {
      humanVerify();
    } else {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/emails/text`, {
        lastName,
        firstName,
        number,
        email,
        message,
      });

      setLastName("");
      setFirstName("");
      setNumber("");
      setEmail("");
      setMessage("");
      msgSend();
    }
  };

  return (
    <div>
      <div className="placement">
        <form action="get" className="allinput" onSubmit={onSubmit}>
          <div className="text_contact">
            <h3> contactez-moi</h3>
          </div>
          <input
            className="PlaceHolder"
            name="nom"
            placeholder="nom"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          ></input>
          <input
            className="PlaceHolder"
            name="prenom"
            placeholder="    prénom"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          ></input>
          <input
            className="PlaceHolder"
            name="numero"
            placeholder="   numéro de téléphone"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          ></input>
          <input
            className="PlaceHolder"
            name="adress_mail"
            placeholder="   adresse email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <textarea
            className="comment"
            name="commentaire"
            placeholder="   saisissez votre commentaire"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <Recaptcha
            sitekey="6LcddSYfAAAAAFT_h9nO34rTFkphX_C5UGgZse1W"
            render="explicit"
            hl="fr"
            verifyCallback={verifyCallback}
            onloadCallback={onloadCallback}
          />
          <input type="submit" className="formsubmit"></input>
        </form>
      </div>
    </div>
  );
}

export default Formulaire;
