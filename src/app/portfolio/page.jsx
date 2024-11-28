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
    img: '/xsj-chat-app.png',
    link: 'https://xsj-ui.vercel.app/',
    githubLink: 'https://github.com/XavierElon/xsj-chat-app',
    isLive: true,
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'AI Chatbot App',
    desc: 'Full-stack AI chatbot. Front-end built in React/Typescript. Backend built in Node/Express. Authentication handled by Clerk. AI model used is Gemini Pro.',
    img: '/ai-chatbot.png',
    link: '',
    githubLink: 'https://github.com/XavierElon/ai-chatbot',
    isLive: false,
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'WTF Programming Blog',
    desc: 'Lightweight, SEO friendly personal blog built in Hugo, vanilla Javascript and CSS. Write various blog posts about career and software engineering.',
    img: '/wtfprogrammingblog.png',
    link: 'https://wtfprogramming.io/',
    githubLink: 'https://github.com/XavierElon/wtfprogrammingblog',
    isLive: true,
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'Users Authorization & Authentication Service',
    desc: 'Microservice for user models, authorization and authentication written in NodeJs, Express and Typescript. Unit and integration tests are written in Mocha and Chai.',
    img: '/users-service.png',
    link: '',
    githubLink: 'https://github.com/XavierElon/xsj-users-microservice',
    isLive: false,
  },
  {
    id: 5,
    color: 'from-red-300 to-pink-300',
    title: 'ML - Supervised Learning',
    desc: 'This is a supervised learning project that uses 3 algorithms on two classification problems. The 3 supervised algorithms are Neural Networks, Support Vector Machines, k-Nearest Neighbors. Different hyperparameters are explored for each algorithm. To see which ones exactly refer to the pdf explaining the experiment in its entirety.',
    img: '/supervised-learning.png',
    link: '',
    githubLink: 'https://github.com/XavierElon/ML-supervised-learning',
    isLive: false,
  },
  {
    id: 6,
    color: 'from-pink-300 to-orange-300',
    title: 'ML - Unsupervised Learning',
    desc: 'An unsupervised learning project that uses 3 algorithms on two clustering problems. The 3 unsupervised algorithms are K-Means, Gaussian Mixture Models, and DBSCAN. Different hyperparameters are explored for each algorithm.',
    img: '/unsupervised-learning.png',
    link: '',
    githubLink: 'https://github.com/XavierElon/ML-unsupervised-learning',
    isLive: false,
  },
  {
    id: 7,
    color: 'from-orange-300 to-green-300',
    title: 'ML - Randomized Optimization',
    desc: 'This is a project that explores randomized optimization using 3 optimization problems on two fitness functions. The 3 random optimization problems are Random Hill Climbing, Genetic Algorithms and Simulated Annealing.',
    img: '/randomized-optimization.png',
    link: '',
    githubLink: 'https://github.com/XavierElon/ML-randomized-optimization',
    isLive: false,
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
                <div className="flex flex-col gap-8 text-white items-center">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div
                    className={`relative w-3/4 h-56 rounded-lg md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[950px] xl:h-[550px] group ${item.link ? 'cursor-pointer' : ''}`}
                  >
                    {item.link ? (
                      <Link
                        className="flex justify-end"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={item.img}
                          alt=""
                          className="rounded-lg"
                          fill
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={item.img}
                        alt=""
                        className="rounded-lg"
                        fill
                        objectFit="cover"
                        objectPosition="center"
                      />
                    )}
                    {item.link && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-lg`}
                      ></div>
                    )}
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[900px]">
                    {item.desc}
                  </p>
                  <Link
                    className="flex justify-center"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-2 md:p-4 md:text-md lg:p-8 text-lg bg-white text-gray-700 font-semibold m-4 rounded-2xl">
                      Github Repo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Are you hiring?</h1>
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
                Full Stack Engineer / Machine Learning -
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
