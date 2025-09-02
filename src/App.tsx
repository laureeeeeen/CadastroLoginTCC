import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './login';
import Inicio from './Inicio';
import './App.css';
import CadastroPessoa from "./CadastroPessoa";
import CadastroLider from "./CadastroLider";
import Navbar from "./NavLogin";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastroPessoa" element={<CadastroPessoa />} />
        <Route path="/cadastroLider" element={<CadastroLider />} />
      </Routes>
    </Router>
  );
};

export default App;
