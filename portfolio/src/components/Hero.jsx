import React from 'react';
import { HERO } from '../constants/index';
import carImg from "../assets/me.jpg";
import { ReactTyped } from "react-typed";
import {motion} from "framer-motion";
const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      
      <motion.div
        initial={{ opacity: 0 ,x:-50}}
        animate={{ opacity: 1 ,x:0}} 
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl mt-20 lg:text-[7rem] text-gray-800 shadow-lg">
           Hey there 👋 
          <span className="block text-blue-600">{`I'm ${HERO.name}`}</span>
        </h2>
        <span className="inline text-3xl tracking-tighter lg:text-4xl">I'm </span>
        <ReactTyped
    strings={[
        "a Software Developer &#128187;",
        "a Computer Science Student &#127891;",
        "a problem solver who enjoys solving complex problems &#129504;",
        "Passionate about Cloud Engineering, DevOps, and Backend Development \u{2601}\u{FE0F}\u{200D}\u{1F4BB}",
        "Powered by coffee and code &#9749;&#65039;&#8205;&#128187;"
    ]}
    typeSpeed={50}          
    backSpeed={30}           
    backDelay={1000}         
    startDelay={500}         
    loop={true}            
    showCursor={true}       
    className="inline text-3xl tracking-tighter lg:text-4xl" 
/>


        
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </motion.div>

     
      <motion.div 
      initial={{opacity: 0 ,scale:0.8}}
      animate={{opacity: 1 ,scale:1}} 
      transition={{ duration: 1 }}
      className="w-full md:w-1/2 flex justify-center md:justify-end lg:p-8">
        <motion.img
          initial={{opacity: 0 }}
          animate={{opacity: 1 }} 
          transition={{ duration: 1 }}
          src={carImg}
          width={550}
          height={550}
          alt="Car"
          className="rounded-3xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
