import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStore } from "zustand";
import { themeStore } from "common/Store";
import Landing from "../src/pages/Landing"
import Login from './pages/login/Login';
import Register from '../src/pages/register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './pages/homepage/Homepage';
import NotFound from '../src/common/NotFound'
const App = () => {
  const { accessToken } = useStore(themeStore);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
         {accessToken && <Route path="/home" element={<Homepage />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </>
  )
}
export default App
