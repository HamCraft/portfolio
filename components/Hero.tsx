"use client"

import profilepic from "@/assets/profile.jpg"
import { useEffect } from "react"
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion"
import Image from "next/image"



const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Hero = () => {
    
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
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0 4px 24px ${color}`




    return (
        <motion.section
            style={{backgroundImage

            }}
            className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
        >
            <div className="z-10 flex flex-col items-center">
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Open For Work
                </span>
                <h1 className="text-white/40 text-7xl font-black mb-3">Hi, I am</h1>
                <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight 
                text-transparent md:text-7xl
                ">
                    Ahmed Yaqoob Dhedhi
                </h1>
                <div>
                    <Image
                        src={profilepic}
                        alt="Ahmed Yaqoob Dhedhi"
                        width={300}
                        height={300}
                        className="rounded-full mt-4"
                    />
                </div>
            </div>
        </motion.section>
    );
    }