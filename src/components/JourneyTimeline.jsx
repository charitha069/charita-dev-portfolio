import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// -------------------------
// JOURNEY IMAGES + TEXT
// -------------------------
const journeyItems = [
  {
    img: "/assets/journey/certificate.jpg",
    text: "The beginning — curious, learning, and stepping into leadership.",
  },
  {
    img: "/assets/journey/event-candid.jpg",
    text: "Handling operations — organizing CiIE workshops & events.",
  },
  {
    img: "/assets/journey/graduation.jpg",
    text: "Promoting innovation — interacting with teams & leaders.",
  },
  {
    img: "/assets/journey/group-team.jpg",
    text: "Capturing memories — volunteering & behind-the-scenes work.",
  },
  {
    img: "/assets/journey/helping-student.jpg",
    text: "Helping students — mentoring & guiding juniors.",
  },
  {
    img: "/assets/journey/work-focused.jpg",
    text: "Focused work — deep concentration on meaningful tasks.",
  },
];

const JourneyTimeline = () => {
  const scrollLeft = () => {
    document.getElementById("scrollContainer").scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.getElementById("scrollContainer").scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section id="journey" className="py-16 px-6 text-white relative">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        My Journey Timeline
      </h2>

      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full"
      >
        <ChevronRight size={28} />
      </button>

      {/* Cards Container */}
      <div
        id="scrollContainer"
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none"
      >
        {journeyItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] snap-center 
            bg-black/20 border border-white/10 backdrop-blur-sm
            rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform 
            duration-300 cursor-pointer"
          >
            {/* IMAGE */}
            <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg bg-transparent relative">
              <img
                src={item.img}
                alt="Journey Preview"
                className="w-full h-full object-cover relative z-10"
              />
            </div>

            {/* TEXT */}
            <p className="mt-4 text-sm sm:text-base text-gray-300">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneyTimeline;
