import React from 'react';
import { motion } from 'framer-motion';

const ExperienceEducation = () => {
  const experiences = [
    {
      role: "Co-Founder & COO",
      company: "Oxytrium Dynamics Pvt. Ltd.",
      date: "Feb' 25 – Present",
      points: [
        "Leading product development for functional energy drink brand Rebelive.",
        "Managing R&D coordination, vendor communication, ingredient selection.",
        "Overseeing operations, branding, GTM planning, and distribution strategy."
      ]
    },
    {
      role: "Head of HR",
      company: "Zenvest (Student Organization, LPU)",
      date: "Feb' 24 – Jun' 25",
      points: [
        "Managed recruitment, onboarding, and member engagement for a 70+ student community.",
        "Designed structured hiring processes and internal performance tracking."
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen pt-24 pb-12">
      <section className="w-full px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24"
        >
          <div className="lg:w-1/2">
            <h2 className="text-xs tracking-widest text-[#ffffffcc] mb-12 uppercase pointer-events-none border-b border-[#ffffff33] pb-4">Experience</h2>
            <div className="flex flex-col gap-16">
              {experiences.map((exp, i) => (
                <div key={i} className="group flex flex-col interactive">
                  <h3 className="text-2xl md:text-3xl font-[200] mb-2 relative w-fit text-white">
                    {exp.role}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  <p className="text-[10px] md:text-xs font-bold text-gray-500 mb-6 tracking-widest uppercase">{exp.company} — {exp.date}</p>
                  <ul className="flex flex-col gap-3">
                    {exp.points.map((pt, idx) => (
                      <li key={idx} className="text-sm font-[200] text-gray-400 flex items-start gap-3 leading-relaxed">
                        <span className="text-[#ffffff33] mt-1">—</span> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-xs tracking-widest text-[#ffffffcc] mb-12 uppercase pointer-events-none border-b border-[#ffffff33] pb-4">Education</h2>
            <div className="flex flex-col gap-16">
              <div className="group flex flex-col interactive">
                  <h3 className="text-2xl md:text-3xl font-[200] mb-2 relative w-fit text-white">
                    B.Tech - Computer Science Engineering
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  <p className="text-[10px] md:text-xs font-bold text-gray-500 mb-6 tracking-widest uppercase">Lovely Professional University — Aug' 23 - Present</p>
                  <p className="text-sm font-[200] text-gray-400 leading-relaxed">
                    Specialization in AI and ML. Current CGPA: 7.45.
                  </p>
              </div>
              
              <div className="h-[1px] w-full bg-[#ffffff33]"></div>

              <div className="group flex flex-col interactive">
                  <h3 className="text-2xl md:text-3xl font-[200] mb-2 relative w-fit text-white">
                    Data Science Training Program
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  <p className="text-[10px] md:text-xs font-bold text-gray-500 mb-6 tracking-widest uppercase">Hands-On Approach — Jun' 25 - Jul' 25</p>
                  <p className="text-sm font-[200] text-gray-400 leading-relaxed">
                    Practiced ML model development with Python and TensorFlow via guided exercises resulting in full systems.
                  </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ExperienceEducation;
