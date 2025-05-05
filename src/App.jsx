import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { Router } from 'react-router'
import Cadastro from './Pages/Cadastro'
import Sobre from "./Pages/Historia"
import DetalhesMecanica from "./Pages/DetalhesMecanica"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/DetalhesMecanica" element={<DetalhesMecanica />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
