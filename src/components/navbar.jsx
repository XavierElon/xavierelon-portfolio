'use client'

import Image from 'next/image'
import Link from 'next/link'
import { React, useEffect, useState } from 'react'
import NavLink from './navLink'
import { motion } from 'framer-motion'

import logo from '../../public/logo.png'
import leetcode from '../../public/leetcode-new.png'
import linkedin from '../../public/linkedin-tile.svg'
import github from '../../public/github-icon.svg'
import youtube from '../../public/youtube-icon.svg'

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
  { url: 'https://wtfprogramming.io', title: 'Blog', external: true },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    // document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme'
  }, [isDarkTheme])

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
        {links.map((link) =>
          link.external ? (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.title}
              style={{ position: 'relative', top: '0.25rem' }}
            >
              {link.title}
            </a>
          ) : (
            <NavLink link={link} key={link.title} />
          )
        )}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 justify-center">
        <Link
          href="/"
          className={`text-sm rounded-md p-1 font-semibold flex items-center justify-center transition-colors duration-1000 ${isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'}`}
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          <span
            className={`mr-1 transition-colors duration-300 ${isDarkTheme ? 'text-white' : 'text-black'}`}
          >
            Xavier
          </span>
          <span
            className={`w-12 h-8 rounded flex items-center justify-center transition-colors duration-300 ${
              isDarkTheme ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            Elon
          </span>
        </Link>
      </div>
      <div className="block md:hidden">
        <Image src={logo} alt="" width={40} height={40} />
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link href="https://github.com/XavierElon">
          <Image src={github} alt="" width={40} height={40} />
        </Link>
        <Link href="https://www.youtube.com/@xavierelon">
          <Image src={youtube} alt="" width={36} height={36} />
        </Link>
        <Link href="https://www.linkedin.com/in/xavierelon/">
          <Image src={linkedin} alt="" width={30} height={30} />
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
