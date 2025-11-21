const projects = [
  {
    title: "HomelyBites – Cloud Kitchen Review Platform",
    description:
      "A full-stack platform where users explore and review cloud kitchens. Built with authentication and a beautiful UI.",
    img: "/homelybitesSreenShot.png",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    demo: "https://homelybites-o51g.onrender.com",
    code: "https://github.com/Vyshnavigonchigari/HomelyBites",
  },
  {
    title: "DrumKit – Play Beats Online",
    description:
      "An interactive drumkit where users create beats with keyboard or click inputs. Simple, responsive, and fun.",
    img: "/DrumkitScreenShot.png",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://vyshnavigonchigari.github.io/Drum-Kit",
    code: " https://github.com/Vyshnavigonchigari/Drum-Kit",
  },
  {
    title: "Developer Portfolio – My Work & Skills",
    description:
      "A clean, responsive portfolio showcasing my projects, experience, and technical expertise. ",
    img: "/myportfolioScreenshot.png",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    demo: " https://vyshnavigonchigari.netlify.app",
    code: " https://github.com/Vyshnavigonchigari/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className=" w-fit mx-auto text-center text-2xl md:text-3xl font-semibold bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg mb-10">
        &lt;Projects/&gt;
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-4 transition-all hover:scale-[1.03] hover:shadow-2xl hover:bg-white/20"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-36 object-contain rounded-xl mb-4"
            />

            <h3 className="text-xl font-semibold bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg ">
              {project.title}
            </h3>
            <p className="text-gray-200 text-sm mt-2">{project.description}</p>

            {/* Tech stack chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full border border-white/50 font-semibold
              bg-clip-text text-transparent bg-linear-to-r from-cyan-200 to-purple-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-5">
              <a
                href={project.demo}
                target="_blank"
                className="px-2 py-1 text-sm font-semibold text-purple rounded-xl  bg-white/75 border border-white hover:scale-105 transition"
              >
                <span className="bg-linear-to-r from-fuchsia-900 to-indigo-900 bg-clip-text text-transparent font-semibold">
                  Visit Site
                </span>
              </a>
              <a
                href={project.code}
                target="_blank"
                className="px-2 py-1 text-sm rounded-xl bg-white/75 border border-white hover:scale-105 transition"
              >
                <span className="bg-linear-to-r from-fuchsia-900 to-indigo-900 bg-clip-text text-transparent font-semibold">
                  Code
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
