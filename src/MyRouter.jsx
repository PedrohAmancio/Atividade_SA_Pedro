import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { BrowserRouter, Route } from 'react-router-dom';
import Cadastro from './Pages/Cadastro'
import Sobre from "./Pages/Historia"
import DetalhesMecanica from "./Pages/DetalhesMecanica"
import DetalhesDds from "./Pages/DetalhesDds"
import DetalhesEletrica from "./Pages/DetalhesEletrica"
import React from "react";

const MyRouter= () => {
  return (
    
    <BrowserRouter>
        <Route Component={Home} path="/" exact />
        <Route Component={Login} path="/Login"  />
        <Route Component={Cadastro} path="/Cadastro" />
        <Route Component={DetalhesMecanica} path="/DetalhesMecanica"  /> 
        <Route Component={DetalhesDds} path="/DetalhesDds"  /> 
        <Route Component={DetalhesEletrica} path="/DetalhesEletrica"  /> 
    </BrowserRouter>
   
  )
}

export default MyRouter
