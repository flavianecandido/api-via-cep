import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SobreMim from './routes/SobreMim.jsx';
import Formacao from './routes/Formacao.jsx'
import Experiencia from './routes/Experiencia.jsx'
import Hobbies from './routes/Hobbies.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SobreMim />,
      },
      {
        path: "/formacao",
        element: <Formacao />,
      },
      {
        path: "/experiencia",
        element: <Experiencia />,
      },
      {
        path: "/hobbies",
        element: <Hobbies />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);