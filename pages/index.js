import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home(props) {

  const id = "article";
  console.log(props)

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </Head><div className={styles.container}>
        <h1 className={styles.titre}>Vocabulaires de base</h1>
        <table className={styles.tableau}>
          <tbody>
            {props.array.map((el, index) => (
              <tr key={index}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
  )
}

export async function getStaticProps() {
  const data = await import(`/data/vocabulary.json`);
  //const data = await import('/');
  const array = data.vocabulary;

  /* if (array.length === 0) {
    return {
      notFound: true
    }
  } */
  if (!array) {
    return {
      redirect: {
        destination: "/isr"
      }
    }
  }

  return {
    props: {array}
  }
}


