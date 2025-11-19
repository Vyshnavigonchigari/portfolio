export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 xl:px-40 "
    >
      <div className="w-fit mx-auto  text-center ">
        <h2
          className="text-center text-2xl md:text-3xl font-bold mb-6 
            bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg "
        >
          &lt;About Me/&gt;
        </h2>
      </div>

      <div className="w-full p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:scale-[1.02] transition-all">
        <p className="text-base text-gray-300 leading-relaxed mb-5">
          Hi, I’m <span className="font-semibold text-cyan-500">Vyshnavi</span>,
          a passionate and detail-oriented developer with a strong foundation in
          <span className="font-semibold text-cyan-500">
            {" "}
            Java, Spring Boot, JavaScript, Node.js, Express.js, React, SQL, and
            MongoDB
          </span>
          .
        </p>

        <p className="text-base text-gray-300 leading-relaxed mb-5">
          I began my development journey with curiosity and self-driven
          learning, exploring different tech stacks and building projects that
          strengthened my hands-on experience. Along the way, I’ve created
          full-stack applications like a{" "}
          <span className="font-semibold text-cyan-500">
            cloud-kitchen review platform
          </span>
          , a sentiment-analysis system, and small interactive projects such as
          a <span className="font-semibold text-cyan-500">drumkit </span>
          and{" "}
          <span className="font-semibold text-cyan-500">
            a pixel art creator
          </span>
          —each helping me grow into a more confident and capable engineer.
        </p>

        <p className="text-base text-gray-300 leading-relaxed mb-5">
          Outside tech, I’m deeply passionate about
          <span className="font-semibold text-cyan-500">
            {" "}
            art, upcycling, and creating aesthetic, handcrafted pieces
          </span>{" "}
          that elevate everyday spaces, andthis creativity keeps me grounded and
          inspires the way I build digital experiences.
        </p>

        <p className="text-base text-gray-300 leading-relaxed">
          I’m always excited for the next challenge—one that helps me grow,
          contribute, and build something truly impactful.
        </p>
      </div>
    </section>
  );
}
