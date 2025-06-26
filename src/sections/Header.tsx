"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { id: "hero", icon: <FaHome />, name: "Home" },
    { id: "about", icon: <FaUser />, name: "About" },
    { id: "skills", icon: <FaTools />, name: "Skills" },
    { id: "projects", icon: <FaProjectDiagram />, name: "Projects" },
    { id: "experience", icon: <FaBriefcase />, name: "Experience" },
    { id: "education", icon: <FaGraduationCap />, name: "Education" },
    { id: "contact", icon: <FaEnvelope />, name: "Contact" },
  ];

  return (
    <div className="fixed top-3 w-full z-50">
      <div className="flex justify-center items-center fixed top-3 w-full z-10">
        {/* Mobile Navbar */}
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur md:hidden overflow-hidden">
          <button
            onClick={toggleMenu}
            className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
          >
            Menu
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="flex flex-col gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur md:hidden fixed top-16 w-full z-10 overflow-hidden">
            <Link to="hero" smooth={true} duration={500} className="px-4 py-1.5 rounded-full text-white/70 text-center text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300 cursor-pointer">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="px-4 py-1.5 rounded-full text-white/70 text-center text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300 cursor-pointer">
              About
            </Link>
            <Link to="skills" smooth={true} duration={500} className="px-4 py-1.5 rounded-full text-white/70 text-center text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300 cursor-pointer">
              Skills
            </Link>
            <Link to="projects" smooth={true} duration={500} className="px-4 py-1.5 rounded-full text-white/70 text-center text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300 cursor-pointer">
              Projects
            </Link>
            <Link to="experience" smooth={true} duration={500} className="px-4 py-1.5 rounded-full text-white/70 text-center text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300 cursor-pointer">
              Experience
            </Link>
            <Link to="education" smooth={true} duration={500} className="px-4 py-1.5 rounded-full text-white/70 text-center text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300 cursor-pointer">
              Education
            </Link>
            <Link to="contact" smooth={true} duration={500} className="px-4 py-1.5 rounded-full text-white/70 text-center text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300 cursor-pointer">
              Contact
            </Link>
          </div>
        )}

        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-center mt-2">
          <nav className="flex gap-4 p-2 border border-white/15 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg shadow-xl">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  className="relative flex flex-col items-center justify-center text-white/50 text-lg hover:text-white transition-all duration-300 cursor-pointer group"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="p-3 rounded-full group-hover:bg-white/20 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Active indicator */}
                  <div className={`absolute bottom-0 h-1 w-1 rounded-full bg-white transition-all duration-300 ${hoveredItem === item.id ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`}></div>
                </Link>

                {/* Animated tooltip - styled as a speech bubble like the example */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 top-14 bg-teal-500 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap transition-all duration-300 z-50 ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                  {item.name}
                  {/* Triangle pointer on top of speech bubble */}
                  <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-teal-500 rotate-45"></div>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>

  );
};

export default Header;