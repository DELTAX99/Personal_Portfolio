import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Works = () => {
  return (
    <div className="w-full flex flex-col min-h-screen pt-24 pb-12">
      <section className="w-full px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-6xl font-[200] mb-16 uppercase tracking-widest text-white">Selected Works</h1>
          
          <div className="flex flex-col border-t border-[#ffffff33]">
            {projects.map((project, i) => (
              <Link 
                to={`/works/${project.id}`}
                key={i} 
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-[#ffffff33] hover:bg-white/[0.02] transition-colors interactive cursor-pointer block w-full"
              >
                <div className="md:w-5/12 mb-6 md:mb-0">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-[200] mb-4 group-hover:translate-x-4 transition-transform duration-500 text-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-2 group-hover:translate-x-4 transition-transform duration-500 delay-75">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] tracking-widest text-[#ffffffcc] border border-[#ffffff33] px-2 py-1 rounded-full uppercase transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-4/12 text-gray-400 font-[200] text-sm md:text-base pr-4 lg:pr-12 mb-6 md:mb-0 group-hover:translate-x-2 transition-transform duration-500 delay-100">
                  {project.desc}
                </div>
                
                <div className="md:w-3/12 flex justify-start md:justify-end items-center pr-4 md:pr-10">
                  {/* Interactive Diagonal Arrow */}
                  <div className="text-[#ffffff55] group-hover:text-white transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Works;
