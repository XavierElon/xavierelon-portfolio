'use client'

import Image from 'next/image'
import Link from 'next/link'
import { React, useEffect, useState } from 'react'
import NavLink from './navLink'
import { motion } from 'framer-motion'

import leetcode from '../../public/leetcode.png'
import linkedin from '../../public/linkedin.png'
import github from '../../public/github.png'
import youtube from '../../public/youtube.png'

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: 'https://alphaprogramming.io', title: 'Blog' },
  { url: '/contact', title: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [open])

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  }
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  }

  const listVariants = {
    closed: {},
    opened: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const listItemVariants = {
    closed: ({ isEven }) => ({
      x: isEven ? '100%' : '-100%',
      opacity: 0,
    }),
    opened: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        opacity: {
          duration: 1,
          ease: 'easeInOut',
        },
      },
    },
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Xavier</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            Elon
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link href="https://github.com/XavierElon">
          <Image src={github} alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.youtube.com/@xavierelon">
          <Image src={youtube} alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/xavierelon/">
          <Image src={linkedin} alt="" width={24} height={24} />
        </Link>
        <Link href="https://leetcode.com/u/XavierElon/">
          <Image src={leetcode} alt="" width={30} height={30} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link, index) => (
              <motion.div
                key={link.title}
                custom={{ isEven: index % 2 === 0 }}
                variants={listItemVariants}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar
