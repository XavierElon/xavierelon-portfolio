'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ link }) => {
  const pathname = usePathname()

  return (
    <Link
      className={`rounded p-1 ${pathname === link.url && 'bg-black text-white'}`}
      href={link.url}
      key={link.title}
    >
      {link.title}
    </Link>
  )
}

export default NavLink
