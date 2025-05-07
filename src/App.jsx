import { Outlet, MyRouter } from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Lay from "./Componentes/Lay";
import React from 'react';
import MyRouter from "./MyRouter";

function App() {
  return (
    <>
    <div className="App" style={{margin : "0", paddingLeft:"0", paddingBottom:"0", paddingRight:"0", width:"100%", height:"100%"}}>
    <Lay/>
    <MyRouter />
    <Container style={{ margin: "0 auto", // Centraliza horizontalmente
            padding: "20px", // Adiciona espaçamento interno
            maxWidth: "1200px", // Define uma largura máxima para o conteúdo
            width: "100%", // Garante que o container ocupe toda a largura disponível
            height: "100%",}}>
    <Outlet />
    </Container>
    </div>
    </>
  )
}

export default App
