import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing-page/Home/HomePage';
import SIgnUpPage from './landing-page/Signup/Signup';
import AboutPage from './landing-page/About/AboutPage';
import ProductsPage from './landing-page/Products/ProductPage';
import PricingPage from './landing-page/Pricing/Charges';
import SupportPage from './landing-page/Support/SupportPage';
import Error from './landing-page/NotFound/Error'
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<SIgnUpPage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


