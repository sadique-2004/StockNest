import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import HomePage from "./landing-page/Home/HomePage";
import SIgnUpPage from "./landing-page/Signup/Signup";
import SignInPage from "./landing-page/Signin/SignInPage";
import AboutPage from "./landing-page/About/AboutPage";
import ProductsPage from "./landing-page/Products/ProductPage";
import PricingPage from "./landing-page/Pricing/Charges";
import SupportPage from "./landing-page/Support/SupportPage";
import Error from "./landing-page/NotFound/Error";
import Navbar from "./landing-page/Navbar";
import Footer from "./landing-page/Footer";


const clerkFrontendApi ='pk_test_dG9sZXJhbnQtaWJleC04MS5jbGVyay5hY2NvdW50cy5kZXYk';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SIgnUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
