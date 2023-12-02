import { useState } from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Property } from "./pages/Property";
import { Contact } from "./pages/Contact";

import { PreHeader } from "./components/common/PreHeader";

import { Footer } from "./components/common/Footer";
import { BsWhatsapp } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Policy } from "./pages/Policy";
import  Navbar from "./components/common/Navbar/Navbar";
import Kasauli from "./pages/Kasauli"
import Dudhwa from "./pages/Dudhwa"
import Naldehra from "./pages/Naldehra"


function App() {
  return (
    <>
      <PreHeader />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/kasauli" element={<Kasauli />} />
        <Route path="/dudhwa" element={<Dudhwa />} />
        <Route path="/naldehra" element={<Naldehra />} />
      </Routes>
      <Footer />

      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "50px",
          textAlign: "right",
          zIndex: "999",
          width: "45px",
          height: "45px",
          borderRadius: "100%",
        }}
        className="whatsapp flex bg-green-600 shadow-lg justify-center  items-center"
      >
        <Link to="https://wa.me/+918382911071">
          <BsWhatsapp className="text-white text-3xl" />
        </Link>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
