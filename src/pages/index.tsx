
import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import type { NextPage } from 'next'
import styles from '@styles/Home.module.css'
import Header from '@/components/header/Header'
import Link from 'next/link'

const Home: NextPage = () => {

  return (
    <Layout>
      <SEO title="Inicio" />

      <Header />

      <div className={styles.banner}>
        
        <div className={styles.banner_content}>
          <div>
          <h2>SER</h2>
          <h2>CREAR</h2>
          <h2>CONECTAR</h2>
          <p>Somos una marca extraterrestre que viene desde Happy Planet, con el proposito de estudiar a la humanidad para entenderla y relacionarla mejor.</p>
          <button>Agendar Asesoria</button>
          </div>
        <img src="/astronauta.png" alt="" />

        </div>

        
        <div className={styles.banner_social}>
          <Link href="">
          <a><i className='bx bxl-instagram'></i></a>
          </Link>
          <Link href="">
          <a><i className='bx bxl-behance'></i></a>
          </Link>
          <Link href="/">
          <a> <i className='bx bxl-facebook' ></i></a>
          </Link>
        </div>
      </div>

      <section>
        <div className="box">
          <h3>Diseno y creatividad</h3>
        </div>
        <div className="box">
          <h3>Mercadotecnia y Comunicacion</h3>
        </div>

        <div>
          <h3>Gestion de proyectos</h3>
        </div>
      </section>
    </Layout>
  )
}

export default Home
