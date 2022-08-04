import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const id = "article";

  return (
    <><Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </Head><div className={styles.container}>
        <h1>Hello Next !</h1>
        <button className="btn btn-primary">Click</button>
      </div></>
  )
}


