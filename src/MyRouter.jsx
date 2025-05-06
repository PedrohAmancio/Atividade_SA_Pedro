import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './Pages/Cadastro'
import Sobre from "./Pages/Historia"
import DetalhesMecanica from "./Pages/DetalhesMecanica"

function MyRouter() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/DetalhesMecanica" element={<DetalhesMecanica />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default MyRouter
