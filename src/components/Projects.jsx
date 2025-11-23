export default function Projects() {
  const projects = [
    {
      title: "DashCam Security System (Python + OpenCV)",
      desc: "Car security dash camera that detects humans, starts recording instantly, and continues 10 seconds after last detection. Saves videos with date & time for surveillance.",
      tech: ["Python", "OpenCV", "Motion Detection", "Human Detection"],
      link: "https://github.com/charitha069",   // <-- Replace with your exact repo link
    },
    {
      title: "Full-Stack Portfolio",
      desc: "React + Tailwind + Vite portfolio with galaxy animation & premium UI design.",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://github.com/charitha069",
    },
    {
      title: "AI Crime Analysis System",
      desc: "Explainable AI-powered system integrating multiple data sources to assist police investigations.",
      tech: ["Python", "ML", "OpenCV", "Explainable AI"],
      link: "https://github.com/charitha069",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-transparent text-white">
      <h2 className="text-center text-5xl font-extrabold 
        bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 
        drop-shadow-[0_0_25px_rgba(0,150,255,0.4)]">
        Projects
      </h2>

      <p className="text-center text-gray-300 mt-3">
        Collection of my works.
      </p>

      <div className="max-w-6xl mx-auto grid gap-12 mt-16 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20
              backdrop-blur-xl shadow-[0_0_25px_rgba(0,150,255,0.2)]
              rounded-2xl p-7 flex flex-col justify-between
              hover:scale-105 hover:shadow-[0_0_40px_rgba(0,200,255,0.5)]
              transition-all duration-500"
          >
            <div>
              <h3 className="text-2xl font-bold text-cyan-300 drop-shadow">
                {p.title}
              </h3>

              <p className="text-gray-300 mt-3">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, i) => (
                  <span key={i}
                    className="px-3 py-1 text-sm bg-black/40 text-cyan-200 
                    border border-cyan-400/30 rounded-full backdrop-blur-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a 
              href={p.link} 
              target="_blank"
              className="mt-6 inline-block text-center px-5 py-2 
                bg-cyan-500/20 text-cyan-300 rounded-xl border border-cyan-400/40
                hover:bg-cyan-500/30 hover:text-white
                transition-all duration-300"
            >
              View Project →
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}
