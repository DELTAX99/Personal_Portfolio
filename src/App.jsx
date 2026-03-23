import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';

import Home from './pages/Home';
import Works from './pages/Works';
import ProjectDetail from './pages/ProjectDetail';
import ExperienceEducation from './pages/ExperienceEducation';
import Certifications from './pages/Certifications';
import CertificateDetail from './pages/CertificateDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
        <div className="bg-black min-h-screen text-white font-sans overflow-hidden flex">
          <Sidebar />
          <ThemeToggle />
          
          {/* Main Content Area */}
          <main className="ml-48 md:ml-64 w-full min-h-screen flex flex-col items-start justify-start">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/works/:id" element={<ProjectDetail />} />
                <Route path="/experience" element={<ExperienceEducation />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/certifications/:id" element={<CertificateDetail />} />
              </Routes>
          </main>
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
