import React from 'react'
import styles from '/styles/Home.module.css'

export default function css() {
  return (
    <>
      <div className={styles.carte}>
        <img src="https://source.unsplash.com/random/500×500" alt="random image" className={styles.monImg}/>
        <div className={styles.cardFooter}>
            <h3 className={styles.footerTitle}>Titre de la carte</h3>
            <p className={styles.footerContent}>Contenu du pied de carte balbalblakd fhhgt fef </p>
            </div>
        </div>
    </>
  )
}
