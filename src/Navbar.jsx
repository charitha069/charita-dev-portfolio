import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:flex justify-between items-center px-12 py-5
        fixed top-0 left-0 w-full z-50 
        bg-black/20 backdrop-blur-sm shadow-md">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-400">
          Charita.dev
        </h1>

        {/* Links */}
        <div className="flex gap-10 text-white font-medium text-lg">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#journey" className="hover:text-blue-400 transition">My Journey</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Dark Mode Toggle Placeholder */}
        <button className="text-white text-xl hover:text-blue-400">🌓</button>
      </nav>

      {/* MOBILE HAMBURGER BUTTON */}
      <div className="md:hidden fixed top-5 right-5 z-50">
        <button onClick={() => setOpen(true)} className="text-white text-4xl">
          ☰
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed top-0 right-0 w-2/3 h-full 
          bg-gray-900/90 backdrop-blur-sm text-white p-6 
          z-50 shadow-xl">

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="text-3xl absolute top-4 right-4"
          >
            ✕
          </button>

          {/* Sidebar Links */}
          <div className="mt-16 flex flex-col gap-8 text-lg">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#journey" onClick={() => setOpen(false)}>My Journey</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>

        </div>
      )}
    </>
  );
}
