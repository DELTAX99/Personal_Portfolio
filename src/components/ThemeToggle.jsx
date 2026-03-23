import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }, [isDark]);

  return (
    <div className="fixed top-8 right-8 md:top-12 md:right-16 z-50">
      <button 
        onClick={() => setIsDark(!isDark)}
        className="w-12 h-6 md:w-14 md:h-7 rounded-full border border-[#ffffff88] flex items-center px-1 transition-colors interactive group"
        style={{ justifyContent: isDark ? 'flex-end' : 'flex-start' }}
        aria-label="Toggle Theme"
      >
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white transition-all duration-300 group-hover:scale-90"></div>
      </button>
    </div>
  );
};

export default ThemeToggle;
