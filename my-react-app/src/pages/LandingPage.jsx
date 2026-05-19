// src/pages/LandingPage.jsx

import Navbar from "../layout/Navbar";
import Hero from "../layout/Hero";
import HeroBanner from "../layout/HeroBanner";

import CardLive from "../layout/CardLive";
import CardProduct from "../layout/CardProduk";
import Footer from "../layout/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />

        {/* <CardLive /> */}
        {/* <CardProduct /> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}