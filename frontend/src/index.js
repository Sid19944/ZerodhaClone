import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage.js";
import Singup from "./landing_page/signup/Signup.js"
import AboutPage from "./landing_page/about/AboutPage.js"
import PricingPage from "./landing_page/pricing/PricingPage.js"
import SupportPage from "./landing_page/support/SupportPage.js"
import ProcutPage from "./landing_page/products/ProcutPage.js";
import LoginPage from "./landing_page/login/LoginPage.js"
import Navbar from "./landing_page/Navbar.js";
import Footer from "./landing_page/Footer.js";
import PageNotFound from "./PageNotFound.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/products" element={<ProcutPage/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
  <Footer/>
  </BrowserRouter>
);
