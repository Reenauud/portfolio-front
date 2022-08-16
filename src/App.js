import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";
import Auth from "./pages/Connect";
import AdminPage from "./pages/AdminPage";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/projets" element={<Projets />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/connect" element={<Auth />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
