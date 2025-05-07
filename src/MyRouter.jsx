import React from 'react';
import { Route,BrowserRouter } from 'react-router';



const MyRouter = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/detalhes-mecanica" element={<DetalhesMecanica />} />
        <Route path="/detalhes-dds" element={<DetalhesDds />} />
        <Route path="/detalhes-eletrica" element={<DetalhesEletrica />} />
      </Routes>
    </BrowserRouter>
  )

}
export default MyRouter;