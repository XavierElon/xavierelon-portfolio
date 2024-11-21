'use client'

import Brain from '@/components/brain'
import { motion, useInView, useScroll } from 'framer-motion'
import { React, useRef } from 'react'

const AboutPage = () => {
  const containerRef = useRef()
  const skillRef = useRef()
  const experienceRef = useRef()

  const { scrollYProgress } = useScroll({ container: containerRef })
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' })
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' })

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER  */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-4 xl:1/2">
          {/* BIORGRAPHY CONTAINER  */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p>
              Hello! I am Xavier Elon, a Full Stack Software Engineer based in
              San Francisco, CA. I have a passion for technology, artificial
              intelligence, space and blockchain. I am currently working for
              Booz Allen as a Senior Full Stack Software Engineer. I have had
              the privilege of working at Booz Allen, Deloitte, and uBreakiFix.
              I am currently in school at Georgia Tech for a Masters in Computer
              Science with a specialization in AI / Machine Learning. I
              specialize in Javascript, Typescript, Python, React, Node, and
              Angular. I am currently working on developing my machine learning
              engineer skills.
            </p>

            {/* BIOGRAPHY QUOTE  */}
            <span>
              I think it is possible for ordinary people to choose to be
              extraordinary.
              <br></br> - Elon Musk
            </span>

            {/* BIOGRAPHY SIGN SVG */}
            <div className="self-end">
              <svg
                width="216"
                height="97"
                viewBox="0 0 216 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M117.148 5.74221C120.263 5.63886 123.607 -0.165216 118.707 3.26196C111.934 7.99918 105.02 13.7308 100.467 20.6929C97.39 25.3984 90.6272 33.1303 93.922 39.5324C96.511 44.563 107.048 41.1005 110.423 39.2686C117.923 35.1984 110.792 38.085 107.349 40.5684C97.1982 47.8904 94.553 55.7526 91.502 67.5396C88.8646 77.7287 93.603 83.1417 103.858 82.8628C105.864 82.8082 119.047 80.1941 117 78.0156"
                  stroke="#E51515"
                  strokeWidth="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M108.534 83.0215C108.534 83.0784 127.035 68.3683 129.405 66.0871C135.422 60.2939 140.912 55.2094 144.885 47.7322C148.629 40.6871 152.12 33.8034 156.233 26.9473C159.344 21.763 160.577 15.88 164.159 10.945C164.654 10.2623 168.029 5.11642 165.531 5.69448C159.636 7.05893 152.302 17.7276 149.253 22.3711C143.78 30.7066 138.544 41.3838 136.581 51.1972C135.733 55.4377 135.036 67.1661 141.589 67.1661C148.801 67.1661 158.424 60.2568 161.064 53.7288C161.261 53.2438 164.292 44.3011 162.154 47.1951C158.299 52.4141 144.857 68.5078 158.329 68.3907C165.923 68.3247 181.374 47.3145 173.7 47.3145C172.07 47.3145 172.982 47.3664 173.969 45.8858C174.261 45.4485 172.587 51.7019 172.552 53.1964C172.463 57.0348 174.594 58.7199 177.867 60.1621C178.996 60.6598 183.818 63.3945 184.901 61.9907C186.559 59.8408 188.223 56.0981 189.857 53.607C191.797 50.6505 195.463 40.2858 199.355 39.6911C202.028 39.2827 197.695 44.8426 197.051 47.4685C194.91 56.1877 195.466 50.3952 198.661 46.0732C199.922 44.3665 209.6 34.3988 212.192 37.52C213.86 39.5287 213.162 46.6825 213.162 49.1514C213.162 52.7864 211.383 58.1641 213.858 58.1641"
                  stroke="#E51515"
                  strokeWidth="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.8313 5.35551C19.8313 1.01482 20.4624 3.43251 23.0769 6.71141C34.6744 21.2566 43.4597 38.0224 56.9696 50.9322C63.6962 57.36 81.6437 78.7332 74.901 72.3223C71.9507 69.5171 68.7695 67.534 67.0022 63.7715"
                  stroke="#E51515"
                  strokeWidth="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M75.2316 8.51363C75.2316 7.15976 76.0543 3.21253 74.827 5.55834C68.9809 16.7328 61.7532 27.0421 53.7125 36.731C39.253 54.1545 21.3697 68.588 7.33844 86.3002C6.00016 87.9896 2.22633 91.9766 2.22633 94.438C2.22633 94.4943 7.492 87.8933 7.99051 87.0175"
                  stroke="#E51515"
                  strokeWidth="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER  */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILLS LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NodeJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NextJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Angular
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER  */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: '0' } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: '0' } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior Full-Stack Engineer & Front-End Lead
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Full-stack engineer building products in React & Angular and
                    Nest & Node JS for the backend. Front-end lead in Angular.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    03/2023 - PRESENT
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold">
                    BOOZ-ALLEN HAMILTON
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Full-Stack Engineer
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Full-stack engineer focused on building products using
                    React/Javscript/Typescript on Frontend and Node
                    JS/Mongo/Postgres on the backend.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    04/2021 - 03/2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold">
                    DELOITTE
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Dev Ops Engineer
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    AWS focused dev ops aimed at improving pipelines and
                    increasing developer productivity.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    03/2023 - PRESENT
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold">
                    uBreakiFix
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER  */}
        <div className="hidden  lg:block w-1/3 sticky top-0 z-30 xl:1/2 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
