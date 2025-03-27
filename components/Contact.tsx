"use client"

import { motion } from "framer-motion"
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="overflow-x-hidden py-32 text-white max-w-[1200px] mx-auto px-6 sm:px-6">
        <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        viewport={{once:true}}
        className="grid lg:grid-cols-2 gap-16"
        >
        <div className="space-y-12">
        <motion.h2
        initial={{opacity: 0, x: -20}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.6, delay: 0.2}}
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-300"
        >
        Get in <span className="text-purple-300">touch</span>
        </motion.h2>
        <motion.div
        initial={{opacity: 0, x: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.4}}
        className="glass p-6 sm:p-8 rounded-2xl space-y-6 sm:space-y-8 w-full max-w-xs sm:max-w-md md:max-w-lg"
        >
            <div className="space-y-2">
                <p className="text-lg text-gray-300">Phone</p>
                <a
                    href="tel:+923092013289"
                    className="text-lg sm:text-xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2 break-all"
                    >
                    +923092013289
                    <span className="text-gray-500">↗️</span>
                    </a>
            </div>
            <div className="space-y-2">
                <p className="text-lg text-gray-300">Email</p>
                <a
                    href="mailto:dhedhiahmedyaqoob@gmail.com"
                    className="text-lg sm:text-xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2 break-all"
                    >
                    dhedhiahmedyaqoob@gmail.com
                    <span className="text-gray-500">↗️</span>
                    </a>
            </div>
        </motion.div>
        </div>
        <motion.div
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.6}}
            className="w-full h-full min-h-[300px] sm:min-h-[400px] rounded-2xl overflow-hidden"
            >  
        </motion.div>

        </motion.div>
    </section>
  )
}

export default Contact
