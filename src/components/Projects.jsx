const projects = [
  {
    title: "HomelyBites – Cloud Kitchen Review Platform",
    description:
      "A full-stack platform where users explore and review cloud kitchens. Built with authentication, role-based access, and a beautiful UI.",
    img: "/images/homelybites.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://homelybites.com",
    code: "https://github.com/yourrepo/homelybites",
  },
  {
    title: "Visual CSS Playground",
    description:
      "A live CSS editor that allows users to experiment with styling visually. Smooth UI with draggable components.",
    img: "/images/cssplayground.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    demo: "#",
    code: "#",
  },
  {
    title: "Sentiment Analysis System",
    description:
      "Analyzes 5000+ product reviews using NLP to classify sentiments with 90% accuracy. Includes Flask UI.",
    img: "/images/sentiment.png",
    tech: ["Python", "Flask", "NLTK"],
    demo: "#",
    code: "#",
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
              className="w-full h-48 object-cover rounded-xl mb-4"
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
