import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
    ],
  },
]);;

const App:React.FC = () => {
  return <RouterProvider router={router} />
}

export default App