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
        <meta name="description" content="Start a secure and reliable validator node with our expert services - contact me today to learn more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/background.png" />
      </Head>
      <Image
        src="/background.png"
        alt="Background Image"
        className={styles.middleImage}
        width={100}
        height={24}
        priority
      />
      <main className={styles.main}>
        <div className={styles.description}>
            <Image
                src="/logo_no_background.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
          <div>
            <a
              href="https://billing.stripe.com/p/login/3cs7tI0uBfjogbmaEE"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.desktop}
            >Login
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1>Power your digital future.</h1>
          <h2>Start your validator portfolio today.</h2>
        </div>

        <div className={styles.grid}>
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
              Building the future of the web. Check out my latest GitHub projects and join the journey.
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
              Step into my world and discover my passions beyond coding on Instagram.
            </p>
          </a>
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
            Explore the world of React, blockchain, and more.
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
            href="https://billing.stripe.com/p/login/3cs7tI0uBfjogbmaEE"
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
