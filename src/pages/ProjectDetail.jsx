import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const currentIndex = projects.findIndex(p => p.id === id);
  const project = projects[currentIndex];
  
  const nextProject = currentIndex >= 0 && currentIndex < projects.length - 1 
    ? projects[currentIndex + 1] 
    : projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-white">
        <h1 className="text-4xl font-[200]">Project Not Found</h1>
        <button onClick={() => navigate('/works')} className="ml-8 text-gray-400 hover:text-white interactive">Return to Works</button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col pt-10 pb-20 px-8 lg:px-16 xl:px-24 text-white animate-fade-in relative max-w-[1400px]">
      
      {/* Top Nav: Back Button */}
      <div className="w-full flex justify-start mb-16 h-10 mt-6 lg:mt-0">
        <button onClick={() => navigate('/works')} className="flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors uppercase tracking-widest text-sm md:text-base font-[300] interactive group">
          <span className="group-hover:-translate-x-1 transition-transform">{'<'}</span> BACK
        </button>
      </div>

      {/* Header: Title & Links */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#ffffff33] pb-6 mb-16 gap-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-[200] uppercase tracking-wider">{project.title}</h1>
        <div className="flex gap-6 text-sm md:text-base font-[300] text-[#cccccc]">
          {project.github && project.github !== "#" && project.github !== "" && (
             <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 interactive">
               GitHub ↗
             </a>
          )}
          {project.demo && project.demo !== "#" && project.demo !== "" && (
             <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 interactive">
               Demo ↗
             </a>
          )}
        </div>
      </div>

      {/* Image Container */}
      <div className="w-full aspect-video bg-[#111111] border border-[#ffffff11] mb-24 flex items-center justify-center overflow-hidden relative p-4 md:p-6 lg:p-10">
         {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-contain shadow-2xl" />
         ) : (
            <span className="text-[#ffffff44] font-[300] tracking-widest text-sm uppercase">Assign Photo Here Later</span>
         )}
      </div>

      {/* Details Section */}
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-12 justify-between items-start border-b border-[#ffffff33] pb-24">
        
        {/* Tools */}
        <div className="lg:w-5/12 flex flex-col">
          <h2 className="text-xl md:text-2xl font-[200] tracking-widest text-[#cccccc] mb-8 uppercase">TOOLS</h2>
          <div className="flex flex-wrap gap-x-3 gap-y-4">
            {project.tools.map((tool, idx) => (
              <span key={idx} className="px-5 py-2 text-sm font-[300] border border-[#ffffff44] rounded-full text-[#cccccc] hover:bg-white hover:text-black hover:border-white transition-colors interactive cursor-pointer">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Duration & Roles */}
        <div className="lg:w-3/12 flex flex-col gap-12">
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-[200] tracking-widest text-[#cccccc] mb-4 uppercase">DURATION</h2>
            <p className="font-[300] text-[#ffffffbb] text-lg">{project.duration}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-[200] tracking-widest text-[#cccccc] mb-4 uppercase">ROLES</h2>
            <p className="font-[300] text-[#ffffffbb] text-lg leading-relaxed">{project.roles}</p>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:w-4/12 flex flex-col">
          <h2 className="text-xl md:text-2xl font-[200] tracking-widest text-[#cccccc] mb-4 uppercase">SUMMARY</h2>
          <p className="font-[300] text-[#ffffffbb] text-base md:text-lg leading-relaxed">
            {project.summary}
          </p>
        </div>

      </div>

      {/* Next Project Footer */}
      <div className="w-full flex justify-end mt-16">
         <Link to={`/works/${nextProject.id}`} className="text-2xl md:text-4xl font-[100] tracking-widest uppercase text-[#cccccc] hover:text-white transition-colors flex items-center gap-4 interactive group text-right">
            {nextProject.title} <span className="group-hover:translate-x-2 transition-transform">→</span>
         </Link>
      </div>

    </div>
  );
};
export default ProjectDetail;
