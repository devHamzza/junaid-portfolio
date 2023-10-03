import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PortfolioVideos from "./components/PVideos/PortfolioVideos";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import About from "./components/About/About";
import LogoScreen from "./components/LogoScreen/LogoScreen";

function App() {
  const [videoId, setVideoId] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  const getVideoId = (id) => {
    setVideoId(id);
  };

  setTimeout(() => {
    setIsLoading(false)
  }, 2400);

  return (
    <>
    {isLoading && <LogoScreen/>}
    {!isLoading && <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PortfolioVideos getVideoId={getVideoId} />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/portfolio"
          element={
            <>
              <PortfolioVideos getVideoId={getVideoId} />
              <Footer />
            </>
          }
        />
        <Route
          path="/videoPlayer"
          element={
            <>
              <VideoPlayer videoId={videoId} />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>}
    </>
  );
}

export default App;
