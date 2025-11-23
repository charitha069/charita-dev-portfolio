import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaPython, FaJava
} from "react-icons/fa";

import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiVscodium, 
  SiMysql,
} from "react-icons/si";


export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 px-7 bg-transparent text-white"
    >

      {/* SECTION HEADING */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold 
      text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto mt-14 space-y-16">

        {/* FRONTEND */}
        <SkillCategory 
          title="Frontend"
          skills={[
            { icon: <FaHtml5 />, name: "HTML" },
            { icon: <FaCss3Alt />, name: "CSS" },
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <FaReact />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
          ]}
        />

        {/* BACKEND */}
        <SkillCategory 
          title="Backend"
          skills={[
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express.js" },
            { icon: <SiMongodb />, name: "MongoDB" },
          ]}
        />

        {/* PROGRAMMING LANGUAGES + DATABASES */}
        <SkillCategory 
          title="Programming Languages / Databases"
          skills={[
            { icon: <FaPython />, name: "Python" },
            { icon: <FaJava />, name: "Java" },
            { icon: <SiMysql />, name: "MySQL / SQL" },
          ]}
        />

        {/* TOOLS */}
        <SkillCategory 
          title="Tools"
          skills={[
            { icon: <FaGitAlt />, name: "Git" },
            { icon: <FaGithub />, name: "GitHub" },
            { icon: <SiVscodium />, name: "VS Code" },
          ]}
        />

      </div>
    </section>
  );
}


/* Reusable Skill Category Component */
function SkillCategory({ title, skills }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-5 text-cyan-300">{title}</h3>

      {/* ALL SKILLS AUTO-ALIGN IN SAME ROW */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-3 p-4 
            bg-black/40 border border-white/10 rounded-xl backdrop-blur-sm
            hover:scale-110 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]
            transition-all duration-300"
          >
            <div className="text-5xl text-cyan-300">{skill.icon}</div>
            <p className="text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
