import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Cadastro from './Pages/Cadastro'
import Sobre from "./Pages/Historia"
import DetalhesMecanica from "./Pages/DetalhesMecanica"
import DetalhesDds from "./Pages/DetalhesDds"
import DetalhesEletrica from "./Pages/DetalhesEletrica"
import React from "react";

const MyRouter= () => {
  return (
    
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/" element={<Login/>}>Login</Route>
          <Route path="/" element={<Cadastro/>}>Cadastro</Route>
          <Route path="/" element={<DetalhesMecanica/>}>DetalhesMecanica</Route>
          <Route path="/" element={<DetalhesEletrica/>}>DetalhesEletrica</Route>
          <Route path="/" element={<DetalhesDds/>}>DetalhesDds</Route>
        </Routes>

    </BrowserRouter>
   
  )
}

export default MyRouter
