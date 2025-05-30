
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutUsPage from '@/pages/AboutUsPage';
import ServicesPage from '@/pages/ServicesPage';
import WeddingsPage from '@/pages/services/WeddingsPage';
import ReceptionsPage from '@/pages/services/ReceptionsPage';
import CorporateEventsPage from '@/pages/services/CorporateEventsPage';
import GalleryPage from '@/pages/GalleryPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import ContactPage from '@/pages/ContactPage';
import { Toaster } from '@/components/ui/toaster';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/acerca-de" element={<PageWrapper><AboutUsPage /></PageWrapper>} />
        <Route path="/servicios" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/servicios/bodas" element={<PageWrapper><WeddingsPage /></PageWrapper>} />
        <Route path="/servicios/recepciones" element={<PageWrapper><ReceptionsPage /></PageWrapper>} />
        <Route path="/servicios/eventos-corporativos" element={<PageWrapper><CorporateEventsPage /></PageWrapper>} />
        <Route path="/galeria" element={<PageWrapper><GalleryPage /></PageWrapper>} />
        <Route path="/testimonios" element={<PageWrapper><TestimonialsPage /></PageWrapper>} />
        <Route path="/contacto" element={<PageWrapper><ContactPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-lightgray">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
