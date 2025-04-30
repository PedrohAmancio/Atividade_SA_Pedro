import { createBrowserRouter } from "react-router-dom";

//Importação das páginas
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import Cadastro from "./Pages/Cadastro.jsx";
import Login from "./Pages/Login.jsx";
import Contato from "./pages/Contato.jsx";
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