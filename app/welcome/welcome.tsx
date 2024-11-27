import logoStt from "./stt.png";
import logoHimatif from "./logo.png";
import { useEffect, useState } from "react";

export function Welcome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Mendeteksi section yang aktif saat scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Animasi smooth scroll saat klik menu
    const menuLinks = document.querySelectorAll(".menu a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        const targetSection = document.getElementById(targetId || "");
        targetSection?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
        setActiveSection(targetId || "");
      });
    });

    // Efek hover pada menu
    const menu = document.querySelector(".menu");
    menu?.addEventListener("mouseover", (e) => {
      if (e.target instanceof HTMLElement) {
        e.target.style.transform = "scale(1.1)";
        e.target.style.transition = "transform 0.3s";
      }
    });
    menu?.addEventListener("mouseout", (e) => {
      if (e.target instanceof HTMLElement) {
        e.target.style.transform = "scale(1)";
      }
    });

    // Custom scrollbar styling
    document.documentElement.style.setProperty('--scrollbar-width', '8px');
    document.documentElement.style.setProperty('--scrollbar-track', '#1f2937');
    document.documentElement.style.setProperty('--scrollbar-thumb', '#3b82f6');

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="content max-w-[75em] mx-auto">
        <div
          className={`fixed inset-0 backdrop-blur-sm z-40 transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
        <nav className="flex fixed flex-col md:flex-row justify-between items-center p-4 md:p-8 w-full max-w-[75em] z-50">
          <div className="flex w-full md:w-auto justify-between items-center">
            <div className="brand">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                HIMATIFTEXAPP
              </h1>
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
          <div
            className={`menu flex flex-col md:flex-row gap-8 w-full md:w-auto items-center ${
              isMenuOpen ? "mt-4" : "hidden md:flex"
            }`}
          >
            <a
              href="#home"
              className={`w-full md:w-auto text-center py-2 md:py-0 transition-all duration-300 ${
                activeSection === "home" 
                  ? "text-aqua font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.7)]" 
                  : "text-white hover:text-aqua"
              }`}
            >
              Home
            </a>
            <a
              href="#product"
              className={`w-full md:w-auto text-center py-2 md:py-0 transition-all duration-300 ${
                activeSection === "product" 
                  ? "text-aqua font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.7)]" 
                  : "text-white hover:text-aqua"
              }`}
            >
              Product
            </a>
            <a
              href="#e-learning"
              className={`w-full md:w-auto text-center py-2 md:py-0 transition-all duration-300 ${
                activeSection === "e-learning" 
                  ? "text-aqua font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.7)]" 
                  : "text-white hover:text-aqua"
              }`}
            >
              E-Learning
            </a>
            <a
              href="#about"
              className={`w-full md:w-auto text-center py-2 md:py-0 transition-all duration-300 ${
                activeSection === "about" 
                  ? "text-aqua font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.7)]" 
                  : "text-white hover:text-aqua"
              }`}
            >
              About
            </a>
          </div>
        </nav>

        <section id="home" className="w-full min-h-screen px-4 sm:px-8 md:px-16">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-4 px-2 sm:px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
              HIMATIFTEXAPP
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl">
              Aplikasi berbasis web untuk mempermudah mahasiswa dalam
              pembelajaran dan mengakses kebutuhan himpunan mahasiswa teknik
              informatika STT TEXMACO
              <div className="flex flex-row items-center gap-4 justify-center mt-8">
                <a href="https://siatex.stttexmaco.ac.id/">
                  <img
                    src={logoStt}
                    alt="logo stt"
                    className="w-24 h-24 sm:w-40 sm:h-40 rounded-md shadow-md hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/100 hover:shadow-xl bg-white"
                  />
                </a>
                <a href="https://himatif.stttexmaco.ac.id/">
                  <img
                    src={logoHimatif}
                    alt="logo himatif"
                    className="w-24 h-24 sm:w-40 sm:h-40 rounded-md shadow-md hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/100 hover:shadow-xl bg-white"
                  />
                </a>
              </div>
            </p>
          </div>
        </section>

        <section id="product" className="w-full min-h-screen px-4 sm:px-8 md:px-16">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-4 px-2 sm:px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Produk Unggulan
            </h1>
            <div className="w-full overflow-x-auto product-scroll">
              <div className="flex gap-4 p-4 min-w-max">
                <div className="w-60 h-80 p-4 flex flex-col items-center justify-center rounded-md shadow-md hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-xl my-white-bg">
                  <img
                    src={logoHimatif}
                    alt="logo stt"
                    className="w-32 h-32 sm:w-40 sm:h-40"
                  />
                  <h2 className="text-xl sm:text-2xl mt-auto font-bold">product 1</h2>
                </div>
                <div className="w-60 h-80 p-4 flex flex-col items-center justify-center rounded-md shadow-md hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-xl my-white-bg">
                  <img
                    src={logoHimatif}
                    alt="logo stt"
                    className="w-32 h-32 sm:w-40 sm:h-40"
                  />
                  <h2 className="text-xl sm:text-2xl mt-auto font-bold">product 2</h2>
                </div>
                <div className="w-60 h-80 p-4 flex flex-col items-center justify-center rounded-md shadow-md hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-xl my-white-bg">
                  <img
                    src={logoHimatif}
                    alt="logo stt"
                    className="w-32 h-32 sm:w-40 sm:h-40"
                  />
                  <h2 className="text-xl sm:text-2xl mt-auto font-bold">product 3</h2>
                </div>
                <div className="w-60 h-80 p-4 flex flex-col items-center justify-center rounded-md shadow-md hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-xl my-white-bg">
                  <img
                    src={logoHimatif}
                    alt="logo stt"
                    className="w-32 h-32 sm:w-40 sm:h-40"
                  />
                  <h2 className="text-xl sm:text-2xl mt-auto font-bold">product 4</h2>
                </div>
                <div className="w-60 h-80 p-4 flex flex-col items-center justify-center rounded-md shadow-md hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-xl my-white-bg">
                  <img
                    src={logoHimatif}
                    alt="logo stt"
                    className="w-32 h-32 sm:w-40 sm:h-40"
                  />
                  <h2 className="text-xl sm:text-2xl mt-auto font-bold">product 5</h2>
                </div>
                <div className="w-60 h-80 p-4 flex flex-col items-center justify-center rounded-md shadow-md hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-xl my-white-bg">
                  <img
                    src={logoHimatif}
                    alt="logo stt"
                    className="w-32 h-32 sm:w-40 sm:h-40"
                  />
                  <h2 className="text-xl sm:text-2xl mt-auto font-bold">product 6</h2>
                </div>
                <div className="w-60 h-80 p-4 flex flex-col items-center justify-center rounded-md shadow-md hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-xl my-white-bg">
                  <img
                    src={logoHimatif}
                    alt="logo stt"
                    className="w-32 h-32 sm:w-40 sm:h-40"
                  />
                  <h2 className="text-xl sm:text-2xl mt-auto font-bold">product 7</h2>
                </div>
                <div className="w-60 h-80 p-4 flex flex-col items-center justify-center rounded-md shadow-md hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-xl my-white-bg">
                  <img
                    src={logoHimatif}
                    alt="logo stt"
                    className="w-32 h-32 sm:w-40 sm:h-40"
                  />
                  <h2 className="text-xl sm:text-2xl mt-auto font-bold">product 8</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="e-learning" className="w-full min-h-screen px-4 sm:px-8 md:px-16">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-4 px-2 sm:px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              E-Learning
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl">
              E-Learning is a platform for learning and teaching
            </p>
          </div>
        </section>

        <section id="about" className="w-full min-h-screen px-4 sm:px-8 md:px-16">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-4 px-2 sm:px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">About</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl">
              About is a platform for learning and teaching
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
