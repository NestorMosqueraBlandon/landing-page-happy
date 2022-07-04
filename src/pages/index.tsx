
import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import type { NextPage } from 'next'
import styles from '@styles/Home.module.css'
import Header from '@/components/header/Header'
import Link from 'next/link'
import Footer from '@/components/footer/Footer'

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

      <section className={styles.section_flex}>
        <article>

        <div className="box">
          <img src="/user-icon.svg" alt="" />
          <h3>Diseno y creatividad</h3>
          <p>Usaremos un diseño poderoso para que tu negocio se destaque y luzca consistentemente bien, ya sea en línea, fuera de línea, creación de marca o ambiente.</p>
        </div>
        <div className="box">
        <img src="/awesome-edit.svg" alt="" />

          <h3>Mercadotecnia y Comunicacion</h3>
        </div>

        <div>
        <img src="/material-security.svg" alt="" />

          <h3>Gestion de proyectos</h3>
        </div>
        </article>


        <article className={styles.section_time}>
          <h4><span>Ahorra tiempo</span> en la gestion de tu negocio con nuestros servicios</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto maxime et laboriosam ea nobis deleniti, vero quia voluptatem laborum quis, fugiat placeat at quo perferendis? Animi corporis culpa ab.</p>
        </article>
      </section>

      <Footer />
    </Layout>
  )
}

export default Home
