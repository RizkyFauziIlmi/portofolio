import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import MainLayout from './layouts/main-layout.tsx'
import Home from './pages/home.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import Profile from './pages/profile.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/hobby",
        element: <Home />
      },
      {
        path: "/articles",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Home />
      },
      {
        path: "/skills",
        element: <Home />
      },
      {
        path: "/network",
        element: <Home />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)