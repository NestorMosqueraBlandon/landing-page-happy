import Layout from '@/components/Layout'
import SEO from '@/components/seo/seo'
import type { NextPage } from 'next'
import styles from '@styles/Home.module.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const Team: NextPage = () => {

    return (
        <Layout>
            <SEO title="Team" />

            <Header />
            
            <div className="container">

            <section className={styles.team_section}>
                <h2>Conozca a los más felices: ayudando a las organizaciones a ganar nuevos clientes, crear conciencia, influir en sus mercados y generar clientes potenciales todos los días.</h2>
                <p>Los más felices son realmente buenos en lo que hacen; ayudando a los clientes con su marketing, con la construcción de su marca, con la creación de contenido, con la gestión de redes sociales, con sus habilidades de diseño y con su presencia en línea y fuera de línea.
                    Descubre qué tienen en común aquí.</p>
            </section>

            <div className={styles.team_list}>
                <div className={styles.team_card}>
                    <div className={styles.team_card_img}>
                    <img src="descarga.png" alt="Valentina Gomez" />
                    </div>
                    <h2>Valentina Gomez</h2>
                    <h3>Cheif Happy</h3>
                    <p>Soy la encargado de poner orden a todo y unaq fecha limite, para que todas esas ideas se vuelvan realidad no cuando quieran volverse realidad, si no realmente poner una fecha que es lo mas importante en todo este proceso, tambien me encargo de ser quien une a nuestor super equipo con los clientes, siendo el puente entre ellos, dos, lo que mas me gusta es analizar las tendencias, incubar ideas.</p>
                </div>

                <div className={styles.team_card}>
                    <div className={styles.team_card_img}>
                    <img src="descarga.png" alt="Daniela Esquivell" />

                    </div>
                    <h2>Daniela Esquivell</h2>
                    <h3>A Happy Designer</h3>
                    <p>Disenadora grafica, encargada de la gestion del equipo interno para que se puedan cumplir de la mejor forma las funciones, tratamos de mantener la filosifia de generar marcas mas felices y mas humanas.</p>
                </div>


                <div className={styles.team_card}>
                <div className={styles.team_card_img}>
                    <img src="descarga.png" alt="Lina Gomez" />
                    </div>
                    <h2>Lina Gomez</h2>
                    <h3>A Happy Community Manager</h3>
                    <p>Copywriter y encargada de las redes sociales y creadora de estrategias para que las marcas crezcan y sean mas felices.</p>
                </div>


                <div className={styles.team_card}>
                     <div className={styles.team_card_img}>
                    <img src="descarga.png" alt="Juliana Velasquez" />
                    </div>
                    <h2>Juliana Velasquez</h2>
                    <h3>A Happy Designer</h3>
                    <p>Disenadora grafica, encargada del diseno de pagianas, la edicion de fotografica, el branding de marca, amo lo que hago, amo cada paso del proceso y creo que se demuestra en cada resultado, contenta de brindarles el mejor contenido posible.</p>
                </div>
            </div>
            </div>

            <Footer />
        </Layout>
    )
}

export default Team
