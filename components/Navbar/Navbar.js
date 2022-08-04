import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Accueil</a>
      </Link>
      <Link href="/blog">
        <a> Blog</a>
      </Link>
      <Link href="/contact">
        <a> Contact</a>
      </Link>
    </nav>
  )
}
