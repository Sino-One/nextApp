import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home(props) {

  const [state, setState] = useState(false);

  useEffect(() => {
    newWord()
  }, [])

  const id = "article";
  const newWord = () => {
    fetch('/api/vocapi').then(response => response.json()).then(data => setState(data));
  }
  console.log(state);

  let randomWord;
  if (state) {
    const array = state.englishList[0].data;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
    console.log(randomWord);
  }

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </Head><div className={styles.container}>
        <h1 className={styles.titre}>Mot au hasard</h1>
        {/* <table className={styles.tableau}>
          <tbody>
            {props.array.map((el, index) => (
              <tr key={index}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <button onClick={newWord} className="btn btn-primary">get Random WORD</button>
        <h2>{randomWord}</h2>
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


