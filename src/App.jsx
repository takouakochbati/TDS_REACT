
import "./App.css";

import Header from "./components/Header/Header";
import Accueil from "./components/Accueil/Accueil";
import Destinations from "./components/Destinations/Destinations";
import Apropos from "./components/Apropos/Apropos";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />

        <Route path="/destinations" element={<Destinations />} />

        <Route path="/apropos" element={<Apropos />} />

        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
