// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Galleri from "./pages/Galleri";
import AboutUsPage from "./pages/AboutUs"; 

import SocialFloatingButton from "./components/SocialFloatingButton";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="relative">
        <Routes>
          
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <SocialFloatingButton />
              </>
            }
          />

          {/* Galleri */}
          <Route
            path="/galleri"
            element={
              <>
                <Galleri />
                <SocialFloatingButton />
              </>
            }
          />

          {/* Manish */}
          <Route
            path="/manish"
            element={
              <>
                <LandingPage />
                <SocialFloatingButton />
              </>
            }
          />

          {/* About */}
          {/* <Route path="/about" element={<AboutUsPage />} /> */}

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;