import React, { useState } from "react";
import pro1 from '../assets/bank.png';
import pro2 from '../assets/health.png';
import pro3 from '../assets/insurance3.png';
import bank1 from '../assets/bank/bank1.jpg';
import bank2 from '../assets/bank/bank2.jpg';
import bank3 from '../assets/bank/bank3.jpg';
import bank4 from '../assets/bank/bank4.jpg';
import bank5 from '../assets/bank/bank5.jpg';
import bank6 from '../assets/bank/bank6.jpg';
import bank7 from '../assets/bank/bank7.jpg';
import bank8 from '../assets/bank/bank8.jpg';
import bank9 from '../assets/bank/bank9.jpg';
import bank10 from '../assets/bank/bank10.jpg';
import bank11 from '../assets/bank/bank11.jpg';
import bank12 from '../assets/bank/bank12.jpg';
import bank13 from '../assets/bank/bank13.jpg';
import bank14 from '../assets/bank/bank14.jpg';
import bank15 from '../assets/bank/bank15.jpg';
import bank16 from '../assets/bank/bank16.jpg';
import bank17 from '../assets/bank/bank17.jpg';
import bank18 from '../assets/bank/bank18.jpg';

import health1 from '../assets/health/health1.jpg';
import health2 from '../assets/health/health2.jpg';
import health3 from '../assets/health/health3.jpg';
import health4 from '../assets/health/health4.jpg';
import health5 from '../assets/health/health5.jpg';
import health6 from '../assets/health/health6.jpg';
import health7 from '../assets/health/health7.jpg';
import health8 from '../assets/health/health8.jpg';
import health9 from '../assets/health/health9.jpg';
import health10 from '../assets/health/health10.jpg';
import health11 from '../assets/health/health11.jpg';
import health12 from '../assets/health/health12.jpg';
import health13 from '../assets/health/health13.jpg';
import health14 from '../assets/health/health14.jpg';
import health15 from '../assets/health/health15.jpg';
import health16 from '../assets/health/health16.jpg';
import health17 from '../assets/health/health17.jpg';
import health18 from '../assets/health/health18.jpg';

import insurance1 from '../assets/insurance/insurance1.jpg';
import insurance2 from '../assets/insurance/insurance2.jpg';
import insurance3 from '../assets/insurance/insurance3.jpg';
import insurance4 from '../assets/insurance/insurance4.jpg';
import insurance5 from '../assets/insurance/insurance5.jpg';
import insurance6 from '../assets/insurance/insurance6.jpg';
import insurance7 from '../assets/insurance/insurance7.jpg';
import insurance8 from '../assets/insurance/insurance8.jpg';
import insurance9 from '../assets/insurance/insurance9.jpg';
import insurance10 from '../assets/insurance/insurance10.jpg';
import insurance11 from '../assets/insurance/insurance11.jpg';
import insurance12 from '../assets/insurance/insurance12.jpg';
import insurance13 from '../assets/insurance/insurance13.jpg';
import insurance14 from '../assets/insurance/insurance14.jpg';
import insurance15 from '../assets/insurance/insurance15.jpg';
import insurance16 from '../assets/insurance/insurance16.jpg';
import insurance17 from '../assets/insurance/insurance17.jpg';
import insurance18 from '../assets/insurance/insurance18.jpg';

import { Dialog } from '@headlessui/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react'; // Added X for the close button
// import { Dialog } from '@headlessui/react'; // Import Dialog for modal functionality


const projects = [
    { id: 1, images: [pro1,bank1, bank2, bank3, bank4, bank5, bank6, bank7, bank8, bank9, bank10, bank11, bank12, bank13, bank14, bank15, bank16, bank17, bank18], link: "https://sadar-biotech-project.vercel.app/" },

    { id: 2, images: [pro2,health1, health2, health3, health4, health5, health6, health7, health8, health9, health10, health11, health12, health13, health14, health15, health16, health17, health18], link: "https://sadar-biotech-project.vercel.app/" },
    { id: 3, images: [pro3,insurance1, insurance2, insurance3, insurance4, insurance5, insurance6, insurance7, insurance8, insurance9, insurance10, insurance11, insurance12, insurance13, insurance14, insurance15, insurance16, insurance17, insurance18], link: "https://insurance-project-link.com" },
];


const DevopsProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openSlider = (project) => {
    setCurrentProject(project);
    setCurrentIndex(0);
    setIsOpen(true);
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % currentProject.images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);

  return (
    <div className="py-6 max-w-[1200px] mx-auto" id="work">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl lg:text-3xl text-white">My <span> Devops Projects</span></h2>
          <p className="text-gray-500">These are my latest Devops projects</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80 relative" onClick={() => openSlider(project)}>
              <img src={project.images[0]} alt="" className="h-full w-full object-cover transition duration-200 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Click to view more</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && currentProject && (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative max-w-2xl w-full p-4">
            {/* Close button with higher z-index */}
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-purple-600 z-10">
              <X size={34} />
            </button>
            
            {/* Image Slider with animations */}
            <div className="relative">
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={currentIndex}
                  src={currentProject.images[currentIndex]}
                  alt="Project"
                  className="w-full h-auto rounded-lg"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Left Arrow Button (styled as per ImageSlider) */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-color p-2 rounded-full shadow-lg text-white hover:scale-105 z-10"
              >
                <ChevronLeft />
              </button>

              {/* Right Arrow Button (styled as per ImageSlider) */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-color p-2 rounded-full shadow-lg text-white hover:scale-105 z-10"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default DevopsProject;