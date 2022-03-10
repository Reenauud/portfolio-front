import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";
import Auth from "./pages/Connect";
import AdminPage from "./pages/AdminPage";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [userco, setUserco] = useState(0);
  useEffect(() => {
    (async () => {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/api/auth/refreshToken`, {
          withCredentials: true,
        })
        .then((response) => {
          setUserco(response.data.id);
        })
        .catch((err) => console.log(err.message));
      return console.log(userco);
    })();
  }, [userco]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/projets" element={<Projets />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/connect" element={<Auth setUserco={setUserco} />}></Route>
        {userco !== 0 ? <Route path="/admin" element={<AdminPage />} /> : null}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
