
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
      <SEO title="Home" />

      <Header />


      <div className={styles.banner}>

        <div className={styles.banner_content}>
          <div>
            <h2>SER</h2>
            <h2>CREAR</h2>
            <h2>CONECTAR</h2>
            <p>Somos una agencia extraterrestre que viene desde Happy Planet, con el proposito de estudiar a la humanidad para entenderla y encontrar la esencia de lo humano 	&#10084;</p>
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
            <p>Crearemos contenido atractivo y relevante que mantenga su marca visible.</p>
          </div>

          <div>
            <img src="/material-security.svg" alt="" />

            <h3>Gestion de proyectos</h3>
            <p>Como su socio de marketing, lo ayudaremos a ganar exposición, comprender a los compradores, generar clientes potenciales y atraer clientes.</p>
          </div>
        </article>


        <article className={styles.section_time}>
          <h4><span>Ahorra tiempo</span> en la gestion de tu negocio con nuestros servicios</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto maxime et laboriosam ea nobis deleniti, vero quia voluptatem laborum quis, fugiat placeat at quo perferendis? Animi corporis culpa ab.</p>
        </article>
      </section>

      <section className={styles.section_build}>
        <img src="/png_nave.png" alt="" />
        <article>
          <h2>HOY <span>HAPPY</span> CONSTRUYE TUS SUENOS</h2>
          <h2>QUE VAN MAS <span>ALLA DEL UNIVERSO</span></h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, illo ut. Culpa nulla eveniet, iste accusamus magni aut perspiciatis necessitatibus ipsa beatae aliquam consequuntur, quis enim vero qui cumque nemo.</p>
        </article>
      </section>

      <section className={styles.section_trend}>
        <article className={styles.trend_list}>
          <div>
            <h2>Lorem ipsum</h2>
            <div>
              <img src="/notification-icon.svg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel veniam sed doloremque tempore, accusantium officiis eligendi nam cum, numquam rem temporibus odio ipsa! Officiis doloribus eius quibusdam ullam odit?</p>
            </div>
          </div>
          <div>
            <h2>Lorem ipsum</h2>
            <div>
              <img src="/user-icon.svg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel veniam sed doloremque tempore, accusantium officiis eligendi nam cum, numquam rem temporibus odio ipsa! Officiis doloribus eius quibusdam ullam odit?</p>
            </div>
          </div>
          <div>
            <h2>Lorem ipsum</h2>
            <div>
              <img src="/like-icon.svg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel veniam sed doloremque tempore, accusantium officiis eligendi nam cum, numquam rem temporibus odio ipsa! Officiis doloribus eius quibusdam ullam odit?</p>
            </div>
          </div>
        </article>
        <article>
          <img src="/up-trend.png" alt="" />
        </article>
      </section>

      <Footer />
    </Layout>
  )
}

export default Home
