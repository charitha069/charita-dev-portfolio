import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center
      bg-transparent text-white px-6"
    >

      {/* Name */}
      <h1
        className="text-5xl md:text-7xl font-extrabold
        text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500
        drop-shadow-lg leading-tight"
      >
        Hi, I'm Charita
      </h1>

      {/* Title */}
      <p className="mt-3 text-xl md:text-3xl text-gray-300 font-medium">
        Aspiring Software Engineer & Full-Stack Web Developer
      </p>

      {/* Sub-text */}
      <p className="mt-2 text-lg md:text-xl text-gray-400 max-w-2xl">
        Passionate about building real-world applications, solving problems, learning and
        creating meaningful experiences.
      </p>

      {/* Social Icons */}
      <div className="flex gap-10 mt-10 text-4xl md:text-5xl">

        {/* GitHub */}
        <a
          href="https://github.com/charitha069"
          target="_blank"
          className="transition transform hover:scale-125 
          hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/charita-reddy-91406a272"
          target="_blank"
          className="transition transform hover:scale-125 
          hover:text-blue-400 hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.8)]"
        >
          <FaLinkedin />
        </a>

        {/* Gmail compose link */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kammaticharitha069@gmail.com"
          target="_blank"
          className="transition transform hover:scale-125 
          hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(248,113,113,0.8)]"
        >
          <SiGmail />
        </a>
      </div>

      {/* Resume Button */}
      <a
        href="/Charita-Resume.pdf"
        download="Charita-Resume.pdf"
        className="mt-10 px-10 py-4 text-lg font-semibold rounded-xl
        bg-white/10 backdrop-blur-md border border-cyan-400/40 text-cyan-300
        hover:bg-cyan-400/20 hover:text-cyan-100 
        hover:shadow-[0_0_20px_rgba(56,189,248,0.7)]
        transition-all duration-300"
      >
        📄 Download Resume
      </a>
    </section>
  );
}
