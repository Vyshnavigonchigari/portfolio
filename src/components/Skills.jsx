export default function Skills() {
  const softSkills = [
    {
      title: "Continuous Learning",
      desc: "I stay updated with evolving technologies and keep improving every day.",
    },
    {
      title: "Communication",
      desc: "I express ideas clearly and collaborate effectively with teams.",
    },
    {
      title: "Adaptability",
      desc: "I adjust quickly to changes, project needs, and new environments.",
    },
    {
      title: "Open-Minded",
      desc: "I welcome new ideas, feedback, and perspectives to build better solutions.",
    },
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen px-6 md:px-20 xl:px-40 py-20"
    >
      <h2 className=" w-fit mx-auto text-center mb-10 text-2xl md:text-3xl font-bold bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
        &lt;My Skills/&gt;
      </h2>

      <div className="w-full p-8 md:p-12 bg-white/5 backdrop-blur-2xlborder border-white/10 rounded-3xl shadow-xl hover:shadow-2xl transition all">
        <p className="text-white mb-10 text-base text-center leading-relaxed">
          Here's a snapshot of the technologies and tools I’ve worked with while
          building real, hands-on projects.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            {
              name: "React",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "JavaScript",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "HTML5",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
              name: "CSS3",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
              name: "Tailwind CSS",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              name: "Node.js",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Express.js",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            },
            {
              name: "MongoDB",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            {
              name: "MySQL",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
            {
              name: "Python",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            },
            {
              name: "Java",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            },
            {
              name: "Git",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
              name: "GitHub",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            },
            {
              name: "Postman",
              logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2.5 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full shadow-md hover:bd-white/20 hover:scale-105 transition-all cursor-pointer"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-6 h-6 opacity-90 transition"
              />
              <span className="text-gray-100 text-sm font-medium whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full p-8 md:p-12 mt-10 bg-white/5 backdrop-blur-2xlborder border-white/10 rounded-3xl shadow-xl hover:shadow-2xl transition all">
        <p className="text-white mb-10 text-base text-center leading-relaxed">
          The qualities that shape how I work, learn, and collaborate.
        </p>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {softSkills.map((soft, idx) => (
            <div
              key={idx}
              className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:scale-[1.02] transition-all"
            >
              <h4 className="text-lg font-semibold bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg mb-2 ">
                {soft.title}
              </h4>
              <p className="text-gray-300 text-sm">{soft.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
