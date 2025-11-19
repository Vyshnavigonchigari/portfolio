import { FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-linear-to-r from-black via-blue to-purple text-center text-gray-400 mt-20">
      <div className="flex flex-col items-center gap-3">

    {/* Name */}
    <h2 className="text-lg md:text-xl font-semibold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      &lt;Vyshnavi /&gt;
    </h2>

    {/* Social Icons */}
    <div className="flex gap-5 mt-2">
      <a
        href="https://github.com/Vyshnavigonchigari"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-xl hover:scale-110 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/vyshnavi-gonchigari"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-xl hover:scale-110 transition"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="mailto:vyshnavigonchigari@gmail.com"
        className="text-white text-xl hover:scale-110 transition"
      >
        <FaEnvelope />
      </a>
    </div>

    {/* Divider Line */}
    <div className="w-24 h-px bg-white/20 mt-4"></div>

    {/* Footer Text */}
    <p className="text-sm text-white/70 mt-3">
      © {new Date().getFullYear()} Vyshnavi. All rights reserved.
    </p>
  </div>
    </footer>
  );
}