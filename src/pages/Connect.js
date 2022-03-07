import React from "react";
import FormulaireConnect from "../components/formulaire/FormulaireConnect";

function Auth({ setUserco }) {
  return (
    <div>
      <FormulaireConnect setUserco={setUserco} />
    </div>
  );
}

export default Auth;
