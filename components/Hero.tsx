"use client"

import profilepic from "@/assets/profile.jpg"
import obj from "@/assets/obj1.png"
import { useEffect } from "react"
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion"
import Image from "next/image"
import { FiArrowRight } from "react-icons/fi"

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Hero = () => {
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
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0 4px 24px ${color}`

  // Simple download function
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Ahmed_Yaqoob_Dhedhi_CV.docx.pdf"
    link.download = "Ahmed_Yaqoob_Dhedhi_CV.docx.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm mt-3">Open For Work</span>
        <h1 className="text-white/40 text-5xl md:text-7xl font-black mb-3">Hi, I am</h1>
        <h1
          className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight
                 text-transparent text-5xl md:text-7xl text-center"
        >
          Ahmed Yaqoob Dhedhi
        </h1>
        <Image
          src={profilepic || "/placeholder.svg"}
          alt="Ahmed Yaqoob Dhedhi"
          width={300}
          height={300}
          className="rounded-full mt-4"
        />
        <div className="mt-4 grid bg-white/5 shadow-xl p-3 rounded-3xl justify-center items-center gap-2 mb-4 grid-flow-col">
          <Image src={obj || "/placeholder.svg"} alt="object" width={30} className="rounded-2xl mx-auto" />
          <Image src={obj || "/placeholder.svg"} alt="object" width={30} className="rounded-2xl mx-auto" />
          <Image src={obj || "/placeholder.svg"} alt="object" width={30} className="rounded-2xl mx-auto" />
          <p className="font-medium">80+ Happy Clients</p>
        </div>
        <p className="my-6 max-w-xl text-center bold text-2xl">Software Engineer & Video Editor</p>

        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          onClick={handleDownloadCV}
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2 hover:bg-white/10 transition-colors"
        >
          Download CV
          <FiArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  )
}
