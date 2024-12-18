import React from 'react';
import { PROJECTS } from '../constants/index';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl"
            tabIndex={0} // Makes the card focusable
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110 group-focus:scale-110"
            />

            {/* Project Content */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/60 
                         opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100 p-4"
            >
              <h3 className="text-lg lg:text-xl mb-2">{project.name}</h3>
              <p className="mb-4 text-sm lg:text-base text-center leading-snug">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-sm lg:text-base text-black hover:bg-gray-300 flex items-center gap-1"
              >
                <span>View on GitHub</span>
                <MdArrowOutward />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
