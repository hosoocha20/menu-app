import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  ScrollRestoration,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import LandingPage from './pages/LandingPage.tsx';
import Home from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
