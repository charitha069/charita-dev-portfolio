import "./global.css";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Skills from "./components/Skills_temp.jsx";
import BackgroundVideo from "./components/BackgroundVideo";
import Projects from "./components/Projects.jsx";
import Journey from "./components/Journey";
import Contact from "./components/Contact";



export default function App() {
  return (
    <>
      {/* Global galaxy background video */}
      <BackgroundVideo />

      {/* All sections */}
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
    </>
  );
}
