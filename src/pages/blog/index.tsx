
import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import type { NextPage } from 'next'
import styles from '@styles/Home.module.css'
import Header from '@/components/header/Header'
import Link from 'next/link'
import Footer from '@/components/footer/Footer'

const Blog: NextPage = () => {

  return (
    <Layout>
      <SEO title="Blog" />

      <Header />

        <div className="container">

        <section>
            <div className={styles.categories}>
              <div>

                <button>
                    Todo
                </button>
                <button>
                    Marketing
                </button>
                <button>
                    Emprendimiento
                </button>
                <button>
                    Redes sociales
                </button>
                <button>
                    Negocios
                </button>
              </div>
              <span>
              <i className='bx bx-search'></i>
              <input type="search"  placeholder='Buscar articulos...'/>

              </span>
            </div>

            <div className={styles.container}>

            <article className={styles.main_article}>
            <div className={styles.main_article_img}>
              <img src="/bloghappy.jpg" alt="" />
            </div>

              <div className={styles.content}>
                <h4>Blog | Social Media Marketing</h4>
                <h2>La estrategia detrás del lanzamiento de un podcast para su marca</h2>
                <p>Atención a empresarios e influencers: ¡no hay mejor momento para lanzar su propio podcast que ahora!</p>
              </div>
            </article>

            <div className={styles.post_list}>
            <article className={styles.main_article}>
              <div className={styles.main_article_img}>
                <img src="/bloghappy.jpg" alt="" />
              </div>

              <div className={styles.content}>
              <h4>Blog | Social Media Marketing</h4>
                <h2>La estrategia detrás del lanzamiento de un podcast para su marca</h2>
                <p>Atención a empresarios e influencers: ¡no hay mejor momento para lanzar su propio podcast que ahora!</p>
              </div>
            </article>
            <article className={styles.main_article}>
              <img src="/i1.jpg" alt="" />

              <div className={styles.content}>
              <h4>Blog | SEO & SEM</h4>
                <h2>Publicaciones en un blog como SEO: lo que las empresas deben saber como propietario de un negocio</h2>
                <p>Atención a empresarios e influencers: ¡no hay mejor momento para lanzar su propio podcast que ahora!</p>
              </div>
            </article>
            <article className={styles.main_article}>
              <img src="/i2.jpg" alt="" />

              <div className={styles.content}>
                <h4>Blog | Marketing Digital</h4>
                <h2>7 maneras en que el marketing digital puede ayudar a que crezca su E-Commerce</h2>
                <p>Atención a empresarios e influencers: ¡no hay mejor momento para lanzar su propio podcast que ahora!</p>
              </div>
            </article>
            <article className={styles.main_article}>
              <img src="/i3.jpg" alt="" />

              <div className={styles.content}>
                <h4>Blog | Marketing Digital</h4>
                <h2>Cómo crear un informe KPI paso a paso</h2>
                <p>Atención a empresarios e influencers: ¡no hay mejor momento para lanzar su propio podcast que ahora!</p>
              </div>
            </article>
            <article className={styles.main_article}>
              <img src="/i4.jpg" alt="" />

              <div className={styles.content}>
                <h4>Blog | Social Media Marketing</h4>
                <h2>Todo lo que necesita saber para una estrategia efectiva de redes sociales</h2>
                <p>Atención a empresarios e influencers: ¡no hay mejor momento para lanzar su propio podcast que ahora!</p>
              </div>
            </article>
            <article className={styles.main_article}>
              <img src="/i5.jpg" alt="" />

              <div className={styles.content}>
                <h4>Blog | Marketing Digital</h4>
                <h2>Agencia vs Equipo Interno: la diferencia y por qué es posible que desee ambos</h2>
                <p>Atención a empresarios e influencers: ¡no hay mejor momento para lanzar su propio podcast que ahora!</p>
              </div>
            </article>
            </div>
            </div>

        </section>
        </div>

      <Footer />
    </Layout>
  )
}

export default Blog
