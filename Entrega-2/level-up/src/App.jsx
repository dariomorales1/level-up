import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home/home.jsx";
import { Catalogo } from "./pages/catalogo/catalogo.jsx";
import "./App.css";

export default function App() {
  const valorInicial = 10;

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </div>
  );
}
