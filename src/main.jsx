import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './components/LandingPage.jsx';
import RopaPage from './components/RopaPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/ropa-hombre",
        element: <RopaPage tiporopa="hombre" />
      },
      {
        path: "/ropa-mujer",
        element: <RopaPage tiporopa="mujer" />
      },
      {
        path: "/ropa-deportivo",
        element: <RopaPage tiporopa="deportivo" />
      },
      {
        path: "/home",
        element: <LandingPage />
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
