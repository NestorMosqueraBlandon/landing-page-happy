
import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import type { NextPage } from 'next'
import styles from '@styles/Home.module.css'
import Header from '@/components/header/Header'
import Link from 'next/link'
import Footer from '@/components/footer/Footer'

const Team: NextPage = () => {

    return (
        <Layout>
            <SEO title="Team" />

            <Header />

            <section className={styles.team_section}>
                <h2>Conozca a los más felices: ayudando a las organizaciones a ganar nuevos clientes, crear conciencia, influir en sus mercados y generar clientes potenciales todos los días.</h2>
                <p>Los más felices son realmente buenos en lo que hacen; ayudando a los clientes con su marketing, con la construcción de su marca, con la creación de contenido, con la gestión de redes sociales, con sus habilidades de diseño y con su presencia en línea y fuera de línea.
                    Descubre qué tienen en común aquí.</p>
            </section>

            <div className={styles.team_list}>
                <div className={styles.team_card}>
                    <img src="" alt="" />
                    <h2>Valentina Gomez</h2>
                    <h3>Cheif Happy</h3>
                    <p></p>
                </div>

                <div className={styles.team_card}>
                    <img src="" alt="" />
                    <h2>Daniela Esquivell</h2>
                    <h3>A Happy Designer</h3>
                    <p></p>
                </div>


                <div className={styles.team_card}>
                    <img src="" alt="" />
                    <h2>Lina Gomez</h2>
                    <h3>A Happy Community Manager</h3>
                    <p></p>
                </div>


                <div className={styles.team_card}>
                    <img src="" alt="" />
                    <h2>Juliana Velasquez</h2>
                    <h3>A Happy Designer</h3>
                    <p></p>
                </div>
            </div>

            <Footer />
        </Layout>
    )
}

export default Team
