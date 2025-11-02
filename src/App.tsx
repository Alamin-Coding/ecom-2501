import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "account", Component: Account },
    ],
  },
]);;

const App:React.FC = () => {
  return <RouterProvider router={router} />
}

export default App