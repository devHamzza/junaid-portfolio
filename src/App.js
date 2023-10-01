import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import PortfolioVideos from './components/PVideos/PortfolioVideos';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar/>
        <Hero/>
      </header>
      <PortfolioVideos/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
