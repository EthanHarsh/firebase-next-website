import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ethan Harsh</title>
        <meta name="description" content="TypeScript addict crafting elegant solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/background.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
            <a href='https://medium.com/@ethanharsh' target='_blank'>Ethan Harsh</a>
          <div>
            <a
              href="https://billing.ethanharsh.com/p/login/3cs7tI0uBfjogbmaEE"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.desktop}
            >Login
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1>Developer & Techno Enthusiast</h1>
          <h2>Crafting code and the occasional beat</h2>
        </div>

        <div className={styles.grid}>
          <a
            href="https://medium.com/@ethanharsh"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Medium <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              From React to blockchain and beyond - Join me for in-depth discussions and fresh perspectives
            </p>
          </a>
          <a
            href="https://www.instagram.com/eharsh4/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Social <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Peek into my life beyond tech on Instagram - Follow me for a taste of my hobbies, interests, and general shenanigans.
            </p>
          </a>
          <a
            href="https://github.com/EthanHarsh"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Code <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Crafting reliable and scalable solutions on GitHub - Come explore my latest project.
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/ethanharsh/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              LinkedIn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Connect with me on LinkedIn.
            </p>
          </a>
          <a
            href="https://billing.ethanharsh.com/p/login/3cs7tI0uBfjogbmaEE"
            className={`${styles.card} ${styles.mobile}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Login <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Login to the customer panel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
