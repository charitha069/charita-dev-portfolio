import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="text-white px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Contact Me
      </h2>

      {/* Card Container */}
      <div
        className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 
        rounded-2xl px-8 py-10 shadow-2xl"
      >
        {/* Top Row: Icons */}
        <div className="flex items-center justify-center gap-8 mb-10">
          <a
            href="mailto:kammaticharitha069@gmail.com"
            className="text-3xl hover:text-cyan-300 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/charitha069"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-cyan-300 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-cyan-300 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/kammaticharitha069@gmail.com"
          method="POST"
          className="flex flex-col gap-5"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg bg-white/10 border border-white/20 text-white 
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg bg-white/10 border border-white/20 text-white 
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-4 rounded-lg bg-white/10 border border-white/20 text-white 
            focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-cyan-400 py-3 rounded-xl text-black font-semibold text-lg 
            hover:bg-cyan-300 transition shadow-xl"
          >
            Send Message
          </button>

          {/* FormSubmit Configuration */}
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </section>
  );
}
