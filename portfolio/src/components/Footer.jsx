import React from 'react'
import {SOCIAL_MEDIA_LINKS} from '../constants/index'
import logo from "../assets/logo.png"
import {motion} from "framer-motion"
export const Footer = () => {
  return (
    <div className=" mb-8 mt-20">
        <div className="flex items-center justify-center">
            <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
             src={logo}   width={200} className="my-20" />
        </div>
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link,index) => (
                <motion.a 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                </motion.a>
                
            ))}
        </div>
        <p className="mt-8 text-center text text-sm tracking-wide
        text-gray-400">
             All rights reserved @Sharon Shimon
        </p>
    </div>
  )
}
