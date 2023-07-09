import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useWindowSize } from 'react-use'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import * as THREE from 'three'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Create a scene, camera, and renderer
    const scene = new THREE.Scene()
    // scene.background = new THREE.Color( 0xff0000 )
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current as unknown as HTMLCanvasElement, alpha: true })
    renderer.setClearColor( 0xffffff, 0)
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Create a sphere
    const geometry = new THREE.SphereGeometry(2, 32, 32)
    const material = new THREE.MeshBasicMaterial({ color: '#6766b3', wireframe: true })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Position the camera
    camera.position.z = 5

    // Animation loop
    function animate() {
      requestAnimationFrame(animate)
      sphere.rotation.y -= 0.005
      renderer.render(scene, camera)
    }
    animate()

    // Clean up
    return () => {
      scene.remove(sphere)
      renderer.dispose()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Ethan Harsh</title>
        <meta name="description" content="TypeScript addict crafting elegant solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/background.png" />
      </Head>
      
      <main className={styles.main}>
      <canvas className={styles.globe} ref={canvasRef} />
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
