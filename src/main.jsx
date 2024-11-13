import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './components/LandingPage.jsx';
import ClothesPages from './components/ClothesPages';
import HombreContainer from "./components/HombreContainer";
import DeportivoContainer from './components/DeportivoContainer';
import MujerContainer from './components/MujerContainer.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/ropa-hombre",
        element: <HombreContainer/>
      },
      {
        path: "/ropa-mujer",
        element: <MujerContainer/>
      },
      {
        path: "/ropa-deportivo",
        element: <DeportivoContainer/>
      },
      {
        path: "/home",
        element: <LandingPage/>
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
