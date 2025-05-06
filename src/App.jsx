import { Outlet } from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Lay from "./Componentes/Lay";
function App() {
  return (
    <>
    <div className="App" style={{margin : "0", paddingLeft:"0", paddingBottom:"0", paddingRight:"0", width:"100%", height:"100%"}}>
    <Lay/>
    <Container style={{margin : "0", paddingLeft:"0", paddingBottom:"0", paddingRight:"0", width:"100%", height:"100%"}}>
    <Outlet />
    </Container>
    </div>
    </>
  )
}

export default App
