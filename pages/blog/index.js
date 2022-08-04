import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div>
      <h1>Le blog</h1>
      <Link href={`/blog/10 plats rapides`}>
      <a>10 plats rapides</a>
      </Link>
    </div>
  )
}
