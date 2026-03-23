import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Github, Mail } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-0 h-screen w-48 md:w-64 flex flex-col justify-center pl-10 z-50 bg-black">
      
      {/* Nav Links */}
      <nav className="flex flex-col gap-6 mb-16">
        <Link to="/" className={`text-xs md:text-sm tracking-widest uppercase relative group interactive transition-colors w-max font-medium ${isActive('/') ? 'text-white' : 'text-gray-500 hover:text-white'}`}>
          HOME
          <span className={`absolute -bottom-2 left-0 h-[1px] transition-all duration-300 ${isActive('/') ? 'w-full bg-white' : 'w-0 bg-white group-hover:w-full'}`}></span>
        </Link>
        <Link to="/works" className={`text-xs md:text-sm tracking-widest uppercase relative group interactive transition-colors w-max font-medium ${isActive('/works') ? 'text-white' : 'text-gray-500 hover:text-white'}`}>
          WORKS
          <span className={`absolute -bottom-2 left-0 h-[1px] transition-all duration-300 ${isActive('/works') ? 'w-full bg-white' : 'w-0 bg-white group-hover:w-full'}`}></span>
        </Link>
        <Link to="/experience" className={`text-xs md:text-sm tracking-widest uppercase relative group interactive transition-colors w-max font-medium ${isActive('/experience') ? 'text-white' : 'text-gray-500 hover:text-white'}`}>
          EXP & EDU
          <span className={`absolute -bottom-2 left-0 h-[1px] transition-all duration-300 ${isActive('/experience') ? 'w-full bg-white' : 'w-0 bg-white group-hover:w-full'}`}></span>
        </Link>
        <Link to="/certifications" className={`text-xs md:text-sm tracking-widest uppercase relative group interactive transition-colors w-max font-medium ${isActive('/certifications') ? 'text-white' : 'text-gray-500 hover:text-white'}`}>
          CERTIFICATIONS
          <span className={`absolute -bottom-2 left-0 h-[1px] transition-all duration-300 ${isActive('/certifications') ? 'w-full bg-white' : 'w-0 bg-white group-hover:w-full'}`}></span>
        </Link>
      </nav>

      {/* Social Icons */}
      <div className="flex flex-col items-start gap-5">
        <a href="https://www.linkedin.com/in/sai-vaishno" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white interactive">
          <Linkedin strokeWidth={1.5} size={20} />
        </a>
        <a href="https://github.com/DELTAX99" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white interactive">
          <Github strokeWidth={1.5} size={20} />
        </a>
        <a href="mailto:saivaishnomohanty2005@gmail.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white interactive">
          <Mail strokeWidth={1.5} size={20} />
        </a>
      </div>

      {/* Footer / Resume */}
      <div className="absolute bottom-8 left-10 flex flex-col gap-4">
        <a 
          href="/resume.pdf" 
          download="Sai_Vaishno_Resume.pdf"
          className="text-xs tracking-widest uppercase relative group interactive transition-colors w-max font-medium text-gray-500 hover:text-white"
        >
          RESUME
          <span className="absolute -bottom-2 left-0 h-[1px] transition-all duration-300 w-0 bg-white group-hover:w-full"></span>
        </a>
        <div className="text-[10px] tracking-widest text-[#ffffff66]">
          © Sai Vaishno
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
