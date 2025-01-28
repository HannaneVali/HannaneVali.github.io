import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CircularProjectList = () => {
  const projects = [
    { id: 1, src: "/api/placeholder/1.png", title: "Project 1" },
    { id: 2, src: "/api/placeholder/2.png", title: "Project 2" },
    { id: 3, src: "/api/placeholder/3.png", title: "Project 3" },
    { id: 4, src: "/api/placeholder/4.png", title: "Project 4" },
    { id: 5, src: "/api/placeholder/5.png", title: "Project 5" },
    { id: 6, src: "/api/placeholder/6.png", title: "Project 6" },
    { id: 7, src: "/api/placeholder/7.png", title: "Project 7" },
    { id: 8, src: "/api/placeholder/8.png", title: "Project 8" },
    { id: 9, src: "/api/placeholder/9.png", title: "Project 9" },
    { id: 10, src: "/api/placeholder/10.png", title: "Project 10" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
    projects[(currentIndex + 3) % projects.length],
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-3xl font-bold mb-6">Circular Project List</h2>
      <div className="relative w-full max-w-4xl">
        {/* Projects Container */}
        <div className="flex overflow-hidden relative">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`w-1/4 p-2 transition-transform duration-500 ${
                index === 1 || index === 2 ? "scale-110 z-10" : "opacity-60"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex justify-between items-center">
          <button
            onClick={prev}
            className="bg-black text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="bg-black text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CircularProjectList;
