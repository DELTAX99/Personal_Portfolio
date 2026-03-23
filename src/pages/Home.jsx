import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col animate-fade-in text-white relative bg-black">
      
      {/* Top Section: Hero & About Split */}
      <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-center p-10 xl:p-20 pt-32 xl:pt-20 min-h-screen">
        
        {/* Left Column (Hero) */}
        <div className="w-full xl:w-1/2 flex flex-col justify-center h-full xl:pl-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl xl:text-[4.75rem] font-[100] tracking-wider leading-[1.1] mb-8 whitespace-nowrap">
              SAI VAISHNO<br />MOHANTY
            </h1>
            <p className="text-lg md:text-xl font-[300] tracking-wide text-gray-400">
              AI & ML Engineer / Full-Stack Developer
            </p>

            <div className="mt-24 xl:mt-32 text-gray-400 font-[300] text-sm md:text-base">
              For business inquiries, email me at<br />
              <a href="mailto:saivaishnomohanty2005@gmail.com" className="hover:text-white transition-colors interactive">
                saivaishnomohanty2005@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column (About Me) */}
        <div className="w-full xl:w-1/2 flex flex-col justify-center h-full mt-24 xl:mt-0 px-0 xl:px-16 pb-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
             className="w-full"
          >
            <div className="flex items-center gap-4 mb-8 w-full xl:max-w-xl">
              <h2 className="text-sm tracking-widest uppercase text-[#ffffffaa]">ABOUT ME</h2>
              <div className="flex-1 h-[1px] bg-[#ffffff33]"></div>
            </div>
            
            <div className="text-[#ffffffcc] text-sm md:text-base leading-relaxed font-[300] space-y-6 max-w-xl">
              <p>
                I am currently in my B.Tech specializing in AI and ML at Lovely Professional University.
              </p>
              <p>
                My main focus is machine learning and full-stack development, and I have worked on 
                several complex end-to-end systems, including real-time sentiment analysis models 
                and predictive student performance trackers. I enjoy exploring new data structures and 
                refining user experiences.
              </p>
              <p>
                Outside of programming, I focus on executing product development strategies and operations 
                management for functional brands.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full px-10 xl:px-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
             <h2 className="text-sm tracking-widest uppercase text-[#ffffffaa]">SKILLS</h2>
             <div className="flex-1 h-[1px] bg-[#ffffff33]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: "LANGUAGES",
                items: ["Python", "C", "C++", "Java", "SQL", "HTML", "CSS", "JavaScript"]
              },
              {
                title: "TOOLS",
                items: ["NumPy", "Pandas", "Seaborn", "Scikit-Learn", "NLTK", "spaCy", "MySQL", "Excel", "PowerBI"]
              },
              {
                title: "SOFT SKILLS",
                items: ["Problem-Solving", "Critical Thinking", "Leadership", "Team Collaboration", "Time Management"]
              }
            ].map((cat, i) => (
              <div key={i} className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-[100] tracking-wider text-[#cccccc] mb-8 uppercase">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-x-3 gap-y-4">
                  {cat.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-5 py-2 text-sm font-[300] border border-[#ffffff44] rounded-full text-[#cccccc] hover:bg-white hover:text-black hover:border-white transition-colors interactive cursor-pointer"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Route Links matching Kento */}
          <div className="w-full flex flex-col items-end gap-6 pt-32">
             <Link to="/works" className="text-3xl md:text-4xl font-[100] tracking-widest uppercase text-[#cccccc] hover:text-white transition-colors flex items-center gap-4 interactive group">
                WORKS <span className="group-hover:translate-x-2 transition-transform">→</span>
             </Link>
             <Link to="/experience" className="text-3xl md:text-4xl font-[100] tracking-widest uppercase text-[#cccccc] hover:text-white transition-colors flex items-center gap-4 interactive group">
                EXP & EDU <span className="group-hover:translate-x-2 transition-transform">→</span>
             </Link>
             <Link to="/certifications" className="text-3xl md:text-4xl font-[100] tracking-widest uppercase text-[#cccccc] hover:text-white transition-colors flex items-center gap-4 interactive group">
                CERTIFICATIONS <span className="group-hover:translate-x-2 transition-transform">→</span>
             </Link>
          </div>

        </motion.div>
      </div>

    </div>
  );
};
export default Home;
