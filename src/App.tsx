import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Signup from './pages/Signup';
import LoginPages from './pages/Login';
import ErrorPages from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "account", Component: Account },
      { path: "cart", Component: Cart },
      { path: "shop", Component: Shop },
      { path: "signup", Component: Signup },
      { path: "login", Component: LoginPages },
      {path: "*", Component: ErrorPages}
    ],
  },
]);;

const App:React.FC = () => {
  return <RouterProvider router={router} />
}

export default App