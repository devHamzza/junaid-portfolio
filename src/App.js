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
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ once: true });

function App() {
  const [videoId, setVideoId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [animation, setAnimation] = useState("zoom-out-up");

  const getVideoId = (id) => {
    setVideoId(id);
  };

  setTimeout(() => {
    setIsLoading(false);
    if (window.innerWidth < 700) {
      setAnimation("fade-up");
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, 2400);

  return (
    <>
      {isLoading && <LogoScreen />}
      {!isLoading && (
        <BrowserRouter>
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero animation={animation} />
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
                  {!isMobile && <Footer />}
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
