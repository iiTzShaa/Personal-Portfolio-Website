import React from 'react';
import { BIO } from '../constants/index';
import { motion } from 'framer-motion';

function Bio() {
  const downloadCV = () => {
    const cvUrl = '/CV-Sharon-Shimon.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV-Sharon-Shimon.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex max-w-4xl flex-col gap-12 pt-20" id="bio">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl lg:text-4xl"
      >
        Bio
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {BIO.map((bio, index) => (
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 * index }}
            key={index}
            className="mb-4 text-lg lg:text-xl"
          >
            {bio}
          </motion.p>
        ))}
      </motion.div>
      {/* Button to download CV */}
      <motion.button 
        onClick={downloadCV} 
        className="mt-6 px-6 py-2 text-white bg-transparent border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white"
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} // Button scale on hover
        whileTap={{ scale: 0.95 }} // Button scale down on tap/click
      >
        Download CV
      </motion.button>
    </section>
  );
}

export default Bio;
