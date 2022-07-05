
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
      <SEO title="Inicio" />

      <Header />

        <section>
            <div className={styles.categories}>
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
        </section>

      <Footer />
    </Layout>
  )
}

export default Blog
