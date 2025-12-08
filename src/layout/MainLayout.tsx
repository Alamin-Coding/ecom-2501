import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify';

const MainLayout: React.FC = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout