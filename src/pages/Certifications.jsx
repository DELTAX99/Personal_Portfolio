import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { certifications } from '../data/certifications';

const Certifications = () => {
  return (
    <div className="w-full flex flex-col min-h-screen pt-24 pb-12">
      <section className="w-full px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-[200] mb-4 uppercase tracking-widest text-white">Certifications</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 border-t border-[#ffffff33]">
            {certifications.map((cert, i) => (
              <Link 
                to={`/certifications/${cert.id}`}
                key={i} 
                className="flex flex-col py-8 border-b border-[#ffffff33] group interactive hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-lg md:text-xl font-[200] text-white relative w-fit">
                    {cert.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                </div>
                <div className="flex justify-between items-center text-[10px] tracking-widest text-[#ffffffcc] uppercase font-bold">
                   <span>{cert.org}</span>
                   <span>{cert.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Certifications;
