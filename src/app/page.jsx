'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import me from '../../public/hero2.jpg'

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center mb-8 lg:mb-0">
          {/* Image Wrapper with Rounded Borders */}
          <div className="relative w-full h-64 sm:h-96 flex items-center justify-center rounded-3xl overflow-hidden">
            <Image
              src={me}
              alt="Xavier Elon's Profile Picture"
              className="object-none rounded-full"
            />
          </div>
          {/* Text Underneath Image */}
          <p className="mt-4 text-center text-sm text-gray-700">
            (Real photo of me, not AI ^)
          </p>
        </div>
        {/* TEXT CONTAINER */}
        <div className="lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold mt-240 p-2">
            I Shape the Future
          </h1>
          {/* DESC */}
          <p className="md:text-xl p-8">
            I am a full-stack software engineer specializing in React,
            Typescript, Node, Express, and MongoDB. I am currently working at
            Booz Allen and attending Georgia Tech for my MS in Computer Science
            specializing in AI/Machine Learning. I have 5+ years of professional
            experience. I have several side projects that I have built over the
            years that can be seen in my Portfolio. I have a passion for
            learning and building new things. I am always looking for new
            opportunities to learn and grow. I currently newly reside in San
            Francisco and am looking to join a local startup or Big Tech. My
            previous portfolio website can be found at{' '}
            <Link
              href="https://xavierelon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              xavierelon.com
            </Link>
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 justify-center">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-gray-800 transition">
                View My Work
              </button>
            </Link>

            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black hover:bg-gray-100 transition">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage
