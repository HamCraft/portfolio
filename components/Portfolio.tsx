"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import project1 from "@/assets/pro1.png"
import project2 from "@/assets/pro2.png"
import { useMotionTemplate,useMotionValue, motion, animate } from 'framer-motion'



const projects = [
    {
        id: 1,
        year: 2025,
        title: "Gemini AI Chatbot - Powerful Gemini Chatbot",
        description:
            "A chatbot that uses Gemini API and integrates it in Chainlit.Built with Python, UV, and Chainlit",
        image: project1
    },
    {
        id: 2,
        year: 2024,
        title: "NextCommerce - Ecommerce Store with both Front End & Back End development ",
        description:
            "Frontend developed using NextJS for a seamless user interface and Sanity For backend & database.Built with NextJS 15, Sanity, React, Typescript, TailwindCSS and Stripe",
        image: project2
    },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]



const Portfolio = () => {

  const [selectedProject, setSelectedProject] = useState(projects[0])  

  const color = useMotionValue(COLORS_TOP[0])
  
      useEffect(() => {
          animate(color, COLORS_TOP, {
              ease: "easeInOut",
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror"
          })
      }, [])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#000 50%, ${color})`

  return (
    <motion.section 
        style={{
            backgroundImage
        }}
        id="portfolio" 
        className='py-32 text-white'>
        <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 '>

        <div className="bg-gradient-to-t from-black to-gray-800 rounded-2xl px-4">
        <h2 className='text-6xl font-bold mb-10 mt-4 text-center'>Selected <span className='text-purple-300'>Projects</span></h2>
        {projects.map((project) => (
            <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className='cursor-pointer mb-8 group'
            >
                <p className='text-gray-400 text-lg mb-2'>{project.year}</p>
                <h3 className={`text-3xl font-semibold group-hover:text-purple-300 transition-colors ${selectedProject.id === project.id ? 'text-purple-300' : ''} duration-300'`}>
                    {project.title}
                </h3>
                {selectedProject.id === project.id && (
                    <div className='border-b-2 border-purple-200 my-4'>

                    </div>    
                )}
                {selectedProject.id === project.id && (
                    <p className='text-gray-400 font-semibold transition-all duration-500 ease-in-out'>
                            {project.description}
                    </p>
                )}    
            </div>
        ))}
        </div>
        
        <Image 
            src={selectedProject.image.src}
            alt={selectedProject.title}
            className='rounded-xl shadow-lg transition-opacity duration-500 ease-in-out'
            width={800}
            height={450}
            />
        </div>            
    </motion.section>
  )
}

export default Portfolio