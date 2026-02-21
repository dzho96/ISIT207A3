

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AdoptionGallery from "./components/AdoptionGallery";
import PetDetails from "./components/PetDetails";
import ReleaseInfo from "./components/ReleaseInfo";
import About from "./components/About";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ArticlePage from "./components/ArticlePage";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem("currentUser");
    return u ? JSON.parse(u) : null;
  });
  return (
    <Router>
      <ScrollToTop />
      <NavBar user={user} setUser={setUser} />
      <div className="main-layout">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adoption" element={<AdoptionGallery />} />
            <Route path="/adoption/:id" element={<PetDetails />} />
            <Route path="/release" element={<ReleaseInfo />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/dog/:id" element={<ArticlePage type="dog" />} />
            <Route path="/articles/cat/:id" element={<ArticlePage type="cat" />} />
            <Route path="/articles/video/:id" element={<ArticlePage type="video" />} />
            <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
