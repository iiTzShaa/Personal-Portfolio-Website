import React from 'react'
import { SKILLS } from '../constants/index'
import {motion} from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      type: 'spring',
      duration: 0.8
    }
  }
}
const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}
function Skills() {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 text-center text-4xl font-semibold">Skills</h2>
      
      {/* Skills Categories */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }} 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6">
        {SKILLS.map((skill, index) => (
          <motion.div
          variants = {itemVariants}
            key={index}
            className="flex items-center justify-center flex-col bg-transparent p-4 rounded-xl shadow-md hover:bg-stone-50/50 transition-all"
          >
            <div className="text-4xl mb-4 text-center text-cyan-400">
              {skill.icon}
            </div>
            <h3 className="text-lg lg:text-2xl text-center text-white">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills
