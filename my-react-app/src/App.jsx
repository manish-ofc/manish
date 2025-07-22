// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SocialFloatingButton from './components/SocialFloatingButton';
import Galleri from './pages/Galleri'; 
import NotFound from './components/NotFound'; // Jika Anda ingin menambahkannya kembali
import AboutUsPage from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <LandingPage />
                <SocialFloatingButton />
              </>
            } 
          />
          <Route 
            path="/galleri" 
            element={
              <>
                <Galleri />
                <SocialFloatingButton />
              </>
            } 
          />
          <Route 
            path="/manish" 
            element={
              <>
                <LandingPage />
                <SocialFloatingButton />
              </>
            }  // Menambahkan rute untuk /manish
          />
{/* 
          <Route path="/about" element={<AboutUsPage />} /> Menambahkan rute untuk /about */}
          <Route path="*" element={<NotFound />} /> {/* Menambahkan kembali rute NotFound */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
