import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { certifications } from '../data/certifications';

const CertificateDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const currentIndex = certifications.findIndex(c => c.id === id);
  const cert = certifications[currentIndex];
  
  const nextCert = currentIndex >= 0 && currentIndex < certifications.length - 1 
    ? certifications[currentIndex + 1] 
    : certifications[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!cert) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-white">
        <h1 className="text-4xl font-[200]">Certificate Not Found</h1>
        <button onClick={() => navigate('/certifications')} className="ml-8 text-gray-400 hover:text-white interactive">Return to Certifications</button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col pt-10 pb-20 px-8 lg:px-16 xl:px-24 text-white animate-fade-in relative max-w-[1400px]">
      
      {/* Top Nav: Back Button */}
      <div className="w-full flex justify-start mb-16 h-10 mt-6 lg:mt-0">
        <button onClick={() => navigate('/certifications')} className="flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors uppercase tracking-widest text-sm md:text-base font-[300] interactive group">
          <span className="group-hover:-translate-x-1 transition-transform">{'<'}</span> BACK
        </button>
      </div>

      {/* Header: Title */}
      <div className="w-full flex flex-col border-b border-[#ffffff33] pb-6 mb-16">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-[200] uppercase tracking-wider mb-2">{cert.title}</h1>
        <p className="text-lg md:text-xl font-[300] tracking-widest text-[#cccccc] uppercase">{cert.org} — {cert.date}</p>
      </div>

      {/* Image Container */}
      <div className="w-full aspect-[4/3] md:aspect-video bg-[#111111] border border-[#ffffff11] mb-24 flex items-center justify-center overflow-hidden relative p-4 md:p-6 lg:p-10">
         {cert.image ? (
            <img src={cert.image} alt={cert.title} className="w-full h-full object-contain shadow-2xl" />
         ) : (
            <span className="text-[#ffffff44] font-[300] tracking-widest text-sm uppercase text-center">Assign Certificate Photo Here<br/><br/><span className="lowercase text-xs opacity-50 text-white">(Inside src/data/certifications.js)</span></span>
         )}
      </div>

      {/* Next Certificate Footer */}
      <div className="w-full flex justify-end mt-8 border-t border-[#ffffff33] pt-12">
         <Link to={`/certifications/${nextCert.id}`} className="text-xl md:text-3xl font-[100] tracking-widest uppercase text-[#cccccc] hover:text-white transition-colors flex items-center gap-4 interactive group text-right">
            {nextCert.title} <span className="group-hover:translate-x-2 transition-transform">→</span>
         </Link>
      </div>

    </div>
  );
};
export default CertificateDetail;
