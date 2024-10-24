'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { React, useRef } from 'react'
import Link from 'next/link'

const items = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'X Chat App',
    desc: "A full-stack website I architected and built that contains it's own local user authorization and authentication microservice that I wrote myself. Users can log in and chat with each other as well as chat with ChatGPT. More features and enhancements to come in the future. The front-end is written in Next.JS, React, and Typescript. The back-end consists of several microservices written in either Node/Express that are hosted on Heroku. The databases being used are MongoDB, PostgreSQL and Firebase for messages/authentication as well as authentication. Unit and integration tests are being done with Mocha and Chai. AWS is being used for pipelines, servers and domain names (CodePipeline, EC2, ELB, Route 53, S3, Codebuild, VPC, etc.)",
    img: '/images/xsj-chat-app.png',
    link: 'xsj-ui.vercel.app',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'AI Chatbot App',
    desc: 'Full-stack AI chatbot. Front-end built in React/Typescript. Backend built in Node/Express. Authentication handled by Clerk. AI model used is Gemini Pro.',
    img: '/images/ai-chatbot.png',
    link: 'https://github.com/XavierElon/ai-chatbot',
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'WTF Programming Blog',
    desc: 'Lightweight, SEO friendly personal blog built in Hugo, vanilla Javascript and CSS. Write various blog posts about career and software engineering.',
    img: '/images/wtfprogrammingblog.png',
    link: 'https://wtfprogramming.io/',
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Users Authorization & Authentication Service',
    desc: 'Microservice for user models, authorization and authentication written in NodeJs, Express and Typescript. Unit and integration tests are written in Mocha and Chai.',
    img: '/images/users-service.png',
    link: 'https://github.com/XavierElon/xsj-users-microservice',
  },
]

const PortfolioPage = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"></div>
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link className="flex justify-end" href={item.link}>
                    <button className="p-2 md:p-4 md:text-md lg:p-8 text-lg bg-white text-gray-700 font-semibold m-4 rounded-2xl">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Is your company hiring?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Engineer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioPage
