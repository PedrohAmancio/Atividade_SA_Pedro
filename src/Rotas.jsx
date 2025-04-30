import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro"
import Sobre from "./Pages/Historia"

//Importação das páginas

const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        phath:"/DetalhesMecanica",
        element: <DetalhesMecanica />,
      }
      
    ],
  },
]);

export default Rotas;