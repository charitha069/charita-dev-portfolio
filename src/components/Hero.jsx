import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center text-center px-6"
    >
      {/* Background image (camera photo) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/assets/journey/camera-cover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 18%", // pulls face into visible area
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.55)",
        }}
      />

      {/* Overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/40 -z-0" />

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 drop-shadow-lg">
          Explore My Journey
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
          A cinematic timeline of my college life, CiIE work, leadership & behind-the-scenes moments.
        </p>

        <a
          href="#journey"
          className="inline-block mt-8 bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-300 transition"
        >
          View Journey →
        </a>

        <div className="flex items-center justify-center gap-6 mt-8 text-2xl">
          <a href="https://github.com/charitha069" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:kammaticharitha069@gmail.com" className="hover:scale-110 transition">
            <SiGmail />
          </a>
        </div>
      </div>
    </section>
  );
}
