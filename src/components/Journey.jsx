import React, { useState, useRef, useEffect } from "react";

const items = [
  {
    src: "/assets/journey/event-candid.jpg",
    title: "Innovative club work",
    desc: "Organizing CIE workshops & events.",
  },
  {
    src: "/assets/journey/group-team.jpg",
    title: "Leading team",
    desc: "Interactions with juniors & team members",
  },
  {
    src: "/assets/journey/helping-student.jpg",
    title: "Mentoring students",
    desc: "Helping & guiding juniors.",
  },
  {
    src: "/assets/journey/work-focused.jpg",
    title: "Focused work",
    desc: "Developed skills and worked on meaningful tasks.",
  },
  {
    src: "/assets/journey/certificate.jpg",
    title: "Acheivements",
    desc: "Certification for  organizing Workshop along with hackathon.",
  },
  {
    src: "/assets/journey/graduation.jpg",
    title: "Graduation",
    desc: "A proud milestone,Completed Btech in CSE-DS, Stepping into the future(2021-2025).",
  },
];

export default function Journey() {
  const [openIndex, setOpenIndex] = useState(-1);
  const galleryRef = useRef(null);

  useEffect(() => {
    function handleKey(e) {
      if (openIndex === -1) return;
      if (e.key === "Escape") setOpenIndex(-1);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + items.length) % items.length);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openIndex]);

  return (
    <section id="journey" className="text-white px-6 py-16">

      {/* ✨ PREMIUM CINEMATIC COVER */}
      <div className="relative w-full h-[88vh] md:h-[92vh] rounded-3xl overflow-hidden shadow-2xl mb-20">
        
        <img
          src="/assets/journey/camera-cover.jpg"
          alt="Journey Cover"
          className="absolute inset-0 w-full h-full object-cover object-[50%_15%]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-300 drop-shadow-[0_0_30px_rgba(0,200,255,0.7)]">
            Explore My Journey
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            A cinematic timeline of my college life, CIE work, leadership & behind-the-scenes moments.
          </p>

          <a
            href="#journey-gallery"
            className="mt-8 px-10 py-4 bg-cyan-400 text-black font-semibold rounded-full shadow-xl
            hover:bg-cyan-300 transition-all text-lg"
          >
            View Journey →
          </a>
        </div>
      </div>

      {/* ✨ SECTION TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">My Journey Timeline</h2>

      {/* ✨ SMOOTH SLIDING GALLERY */}
      <div
        id="journey-gallery"
        ref={galleryRef}
        className="flex gap-6 overflow-x-scroll scroll-smooth snap-x snap-mandatory py-6 px-2 no-scrollbar"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="snap-center min-w-[320px] md:min-w-[360px] bg-white/5 
            rounded-2xl p-4 shadow-xl border border-white/10 cursor-pointer
            backdrop-blur-xl hover:scale-[1.02] transition-all"
            onClick={() => setOpenIndex(index)}
          >
            <div className="w-full h-64 md:h-72 overflow-hidden rounded-xl">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ✨ LIGHTBOX WITH LEFT/RIGHT ARROWS */}
      {openIndex !== -1 && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setOpenIndex(-1)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0b0b0b] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenIndex(-1)}
              className="absolute top-4 right-4 z-30 p-2 text-2xl bg-black/40 rounded-full hover:bg-black/60"
            >
              ✕
            </button>

            {/* LEFT ARROW */}
            <button
              onClick={() => setOpenIndex((i) => (i - 1 + items.length) % items.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-4xl px-3 py-2 bg-black/30 hover:bg-black/50 rounded-full z-40"
            >
              ◀
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={() => setOpenIndex((i) => (i + 1) % items.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-4xl px-3 py-2 bg-black/30 hover:bg-black/50 rounded-full z-40"
            >
              ▶
            </button>

            {/* IMAGE */}
            <div className="w-full h-[60vh] md:h-[75vh] bg-black flex items-center justify-center">
              <img
                src={items[openIndex].src}
                alt={items[openIndex].title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* TEXT BELOW IMAGE */}
            <div className="px-6 py-5">
              <h3 className="text-2xl font-bold">{items[openIndex].title}</h3>
              <p className="mt-2 text-gray-300">{items[openIndex].desc}</p>

              <div className="mt-3 text-sm text-gray-400 text-right">
                {openIndex + 1} / {items.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
