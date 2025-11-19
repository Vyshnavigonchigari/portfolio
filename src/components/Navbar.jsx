import { useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    let current = "";
    for (let id of sections) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = id;
          break;
        }
      }
    }
    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-black via-blue to-purple lg:px-20 z-50 ">
        <div className="flex justify-between items-center px-8 py-4">
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
            &lt;Vyshnavi/&gt;
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Skills", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-base font-medium  tracking-wide transition 
      ${activeSection === item.toLowerCase() ? "text-fuchsia-300" : "text-white"}
    `}
              >
                {item}
              </a>
            ))}

            <a
            href="#contact" 
            className="px-4 py-1 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full text-white font-bold  hover:border-2 transition">
              Contact Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <div
            className="md:hidden text-lg text-purple-300 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </div>
        </div>
      </nav>

      {/* FULL-SCREEN MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed  px-5 py-12 inset-0 bg-linear-to-r from-black via-blue to-purple backdrop-blur-lg flex flex-col items-start justify-start text-base font-normal  z-60">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-xl text-white"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>

          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative py-1 text-base font-medium  tracking-wide transition 
      ${activeSection === item.toLowerCase() ? "text-fuchsia-300" : "text-white"}
    `}
              onClick={() => setOpen(false)}
            >
              {item}
              
    
              
            </a>
          ))}
        </div>
      )}
    </>
  );
}
