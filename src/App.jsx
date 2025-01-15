import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className="bg-custom">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
