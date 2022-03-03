import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";
import Auth from "./pages/Connect";
import AdminPage from "./pages/AdminPage";

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
      <Footer />
    </div>
  );
}

export default App;
