import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-evenly w-full min-h-screen px-6 md:px-14 lg:px-24 xl:px-52"
    >
      {/* Left content */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-0 md:mt-10 mb-20 md:mb-0">
        <h1 className="text-2xl  lg:text-4xl font-bold mb-1 md:mb-3 text-white ">
          Hey I'm{" "}
          <span className="bg-linear-to-r from-cyan-400 via-purple-500 to-purple-300 text-transparent bg-clip-text">
            Vyshnavi
          </span>
        </h1>

        <h2 className="text-xl lg:text-3xl font-semibold mb-1 md:mb-2 flex justify-center md:justify-start items-center gap-2">
          <span className="text-white">I'm a</span>
          <span
            className=" text-xl lg:text-3xl bg-linear-to-r from-pink-500 via-orange-400 to-purple-400 text-transparent bg-clip-text drop-shadow-lg inline-flex"
          >
            <Typewriter
              options={{
                strings: ["Fullstack Developer", "Software Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>

        <p className="hidden md:flex text-white text-sm leading-relaxed mt-4 xl:text-base">
          Passionate about building scalable applications, creative designs, and
          impactful user experiences.
        </p>

        {/* Social icons */}
        <div className="flex justify-center md:justify-start gap-4  mt-3 md:mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/Vyshnavigonchigari" },
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/vyshnavi-gonchigari" },
            { icon: <FaEnvelope />, link: "mailto:vyshnavigonchigari@gmail.com" },
          ].map(({ icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border-0 text-white text-xl hover:scale-110 hover:bg-linear-to-r hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              {icon}
            </a>
          ))}
        </div>
<a href="/Vyshnavi_Gonchigari_In_Resume.pdf" download > 
  <button className="flex items-center justify-center gap-2 mt-4 md:mt-6  mx-auto  md:ml-0 px-2 py-1 md:px-4 md:py-2 text-white bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 font-bold rounded-md hover:scale-110 hover:border-2 hover:border-white shadow-md transition">
    <FaFileDownload className="text-lg" />
    Resume
  </button>
</a>
      </div>

      {/* Right image */}
      <div className="w-full  pt-5 md:pt-10 md:w-1/2 flex justify-center md:justify-end mb-0">
        <div className="relative w-64 h-64 md:w-88 md:h-88 lg:w-104 lg:h-104 xl:w-108 xl:h-108">
          <img
            src="/coderwomen2.png"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
