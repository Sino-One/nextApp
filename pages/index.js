import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {

  const id = "article";

  return (
    <div className={styles.container}>
      <h1>Hello Next !</h1>        
    </div>
  )
}
