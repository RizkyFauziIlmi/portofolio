import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import MainLayout from './layouts/main-layout.tsx'
import Home from './pages/home.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import Profile from './pages/profile.tsx'
import Hobby from './pages/hobby.tsx'
import Projects from './pages/projects.tsx'
import Skills from './pages/skills.tsx'
import Login from './pages/login.tsx'

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
        element: <Hobby />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/login",
        element: <Login />
      }
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
