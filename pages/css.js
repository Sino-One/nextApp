import React from 'react'
import styles from '/styles/Home.module.css'

export default function css() {
  return (
    <>
      <div className={styles.carte}>
        <img src="https://source.unsplash.com/random/500×500" alt="random image" className={styles.monImg}/>
        <div className={styles.cardFooter}>
            <h3 className={styles.footerTitle}>Titre de pied de carte</h3>
            </div>
            <p className={styles.footerContent}>Contenu du pied de page balbalblakd fhhgt fef </p>
        </div>
    </>
  )
}
