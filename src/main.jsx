import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
// import { RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
// import MyRouter from './Routes/Router.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    {/* <RouterProvider router={MyRouter} /> */}
  </StrictMode>,
)
