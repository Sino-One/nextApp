import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Liste(props) {
    console.log("slug", props)

    const router = useRouter();
    console.log(router);

  return (
    <div className='container'>
      <h1 className={styles.titre}>{router.query.liste.toString()[0].toUpperCase() + router.query.liste.slice(1)}</h1>
        <table className={styles.tableau}>
          <tbody>
            {props.listeEnCours.map((el, index) => (
              <tr key={index}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}


export async function getStaticProps(context) {
  const slug = context.params.liste;
  const data = await import('/data/pathsvoc.json');

  const listeEnCours = data.englishList.find(list => list.name === slug);

  return {
    props: {
      listeEnCours: listeEnCours.data
    }
  }
}


export async function getStaticPaths() {
  const data = await import(`/data/pathsvoc.json`)

  const paths = data.englishList.map(item => ({
    params: {liste: item.name}
  }))

  return {
    /* paths: [
      {params: {liste: "words"}},
      {params: {liste: "adjectives"}},
      {params: {liste: "verbs"}},
    ], */
    paths,
    fallback: false // 404 on unknown path
  }
}