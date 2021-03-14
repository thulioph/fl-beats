import React from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { getBeats } from '../services/fetch-data'
import Card from '../components/card'

export default function Home({ beats }) {
  return (
    <div className={styles.container}>
      <a href="https://github.com/thulioph/fl-beats" target="_blank">
        <img className={styles.ribbon} src="ribbon.svg" alt="Fork me on GitHub" />
      </a>

      <Head>
        <title>FL Beats 🎹</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1 className={styles.title}>
            <a href="/">FL Beats <span>🎹</span></a>
          </h1>

          <p className={styles.description}>
            This is a list of sounds I'm creating while learning and exploring <a href="https://www.image-line.com/" target="_blank" >
              fl-studio
            </a>.
          </p>
        </section>

        <section className={styles.grid}>
          {beats.map((el) => (
            <React.Fragment key={el.id}>
              <Card {...el} />
            </React.Fragment>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} All rights reserved
      </footer>
    </div>
  )
}

export function getStaticProps(context) {
  const beats = getBeats()

  return {
    props: {
      beats
    }
  }
}