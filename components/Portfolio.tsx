"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import project1 from "@/assets/pro1.png"
import project2 from "@/assets/pro2.png"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"
import { FiGithub } from "react-icons/fi"

const projects = [
  {
    id: 1,
    year: 2025,
    title: "Health and Wellness Agent - OpenAI Agents SDK Project",
    description: "An Agent that is based on Health And Wellness.Built with OpenAI Agents SDK, Python, UV",
    image: project1,
    githubUrl: "https://github.com/HamCraft/q4_assignments_and_projects/tree/main/health_and_wellness_agent",
  },
  {
    id: 2,
    year: 2024,
    title: "NextCommerce - Ecommerce Store with both Front End & Back End development",
    description:
      "Frontend developed using NextJS for a seamless user interface and Sanity For backend & database.Built with NextJS 15, Sanity, React, Typescript, TailwindCSS and Stripe",
    image: project2,
    githubUrl: "https://github.com/HamCraft/ecommerce-sanity", 
  },
]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
    })
  }, [])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#000 50%, ${color})`

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      id="portfolio"
      className="py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 ">
        <div className="bg-gradient-to-t from-black to-gray-800 rounded-2xl px-4">
          <h2 className="text-6xl font-bold mb-10 mt-4 text-center">
            Selected <span className="text-purple-300">Projects</span>
          </h2>
          {projects.map((project) => (
            <div key={project.id} onClick={() => setSelectedProject(project)} className="cursor-pointer mb-8 group">
              <p className="text-gray-400 text-lg mb-2">{project.year}</p>
              <div className="flex items-center gap-3 mb-2">
                <h3
                  className={`text-3xl font-semibold group-hover:text-purple-300 transition-colors ${selectedProject.id === project.id ? "text-purple-300" : ""} duration-300`}
                >
                  {project.title}
                </h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-purple-300"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FiGithub size={24} />
                </a>
              </div>
              {selectedProject.id === project.id && <div className="border-b-2 border-purple-200 my-4"></div>}
              {selectedProject.id === project.id && (
                <div className="flex items-start gap-4">
                  <p className="text-gray-400 font-semibold transition-all duration-500 ease-in-out flex-1">
                    {project.description}
                  </p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg transition-colors duration-300 text-sm"
                    aria-label={`View ${project.title} source code`}
                  >
                    <FiGithub size={16} />
                    <span>View Code</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <Image
          src={selectedProject.image.src || "/placeholder.svg"}
          alt={selectedProject.title}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          width={800}
          height={450}
        />
      </div>
    </motion.section>
  )
}

export default Portfolio
