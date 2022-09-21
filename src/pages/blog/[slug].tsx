import Layout from "@/components/Layout";
import SEO from "@/components/seo/seo";
import type { NextPage } from "next";
import styles from "@styles/Home.module.css";
import Header from "@/components/header/Header";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

const Post: NextPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />

      <Header />

      <div className="container">
        <div className={styles.categories}>
          <div>
            <button>Todo</button>
            <button>Marketing</button>
            <button>Emprendimiento</button>
            <button>Redes sociales</button>
            <button>Negocios</button>
          </div>
        </div>
      </div>

      <div className="container content_post">
        <aside>
          <h3>Buscas asesoria?</h3>
          <p>
            Encuentra el camino para que tu negocio llegue al sigueinte nivel.
          </p>
          <button>Contactanos</button>
          <button className="special-btn">
            <span>
              <i className="bx bx-heart"></i>
            </span>{" "}
            <p>Valorar</p>
          </button>
          <button className="special-btn">
            <span>
              <i className="bx bx-share-alt"></i>
            </span>{" "}
            <p>Compartir</p>
          </button>
        </aside>
        <div>
          <h2>
            ¿Cuáles son los roles en un equipo de Marketing? Conoce las
            funciones y habilidades que puede desempeñar cada uno
          </h2>
          <p>
            <strong>
              ¿Cuáles son los roles de un equipo de Marketing? ¿Te interesa
              trabajar en esta área?
            </strong>
            Te adelantamos que de acuerdo a tus habilidades y tu profesión, hay
            varios cargos en los que podrías desempeñarte.
          </p>
          <p>
            El equipo de Marketing es el área encargada de la creación,
            comunicación, distribución e imagen de los productos o servicios que
            ofrece la empresa. Sin este equipo, las empresas no tendrían
            estrategas que los representen. En ese sentido, se necesita de
            profesionales que cumplan los requisitos para cada uno de los roles
            que vamos a mencionar.
          </p>
          <p>
            Entonces, si te interesa saber mucho más sobre los roles de un
            equipo de Marketing, no dudes en seguir leyendo. Hablaremos desde el
            gerente de marketing hasta el especialista SEO. Identifica cuál rol
            va con tu perfil y qué skills necesitas para estar más cerca del
            cargo que deseas, ¡toma nota!.
          </p>

          <h3>1. Gerente de Marketing</h3>

          <p>
            Un gerente de Marketing se encarga de administrar, supervisar y
            desarrollar estrategias para la interacción con los clientes.
            Además, se caracteriza por brindar confianza y liderazgo hacia los
            demás miembros del equipo de Marketing. Él debe guiar la mayoría de
            planes estratégicos de marketing que se realicen en la empresa, no
            obstante, sin dejar de lado que los demás roles van a tener sus
            tareas específicas.
          </p>
          <p>
            Entonces, las funciones principales de un gerente dentro del equipo
            de Marketing, son las siguientes:
          </p>
          <ul>
            <li>Representar a la empresa en los nuevos lanzamientos. </li>
            <li>Coordinar y planificar reuniones. </li>
            <li>Establecer vínculos con clientes y otras empresas. </li>
          </ul>
        </div>
      </div>

    <div className="container-color">

      <div className="container ">
        <div className="interesting">
          <h2>También podría interesarte</h2>
          <div className="interesting-content">
            <div className="interesting-card">
              <div className="interesting-img">
                <img src="/bloghappy.jpg" alt="" />
              </div>
              <div className="interesting-content-data">
                <h4>Blog | Social Media Marketing</h4>
                <h2>
                  La estrategia detrás del lanzamiento de un podcast para su
                  marca
                </h2>
                <p>
                  Atención a empresarios e influencers: ¡no hay mejor momento
                  para lanzar su propio podcast que ahora!
                </p>
              </div>
            </div>
            <div className="interesting-card">
              <div className="interesting-img">
                <img src="/bloghappy.jpg" alt="" />
              </div>
              <div className="interesting-content-data">
                <h4>Blog | Social Media Marketing</h4>
                <h2>
                  La estrategia detrás del lanzamiento de un podcast para su
                  marca
                </h2>
                <p>
                  Atención a empresarios e influencers: ¡no hay mejor momento
                  para lanzar su propio podcast que ahora!
                </p>
              </div>
            </div>
            <div className="interesting-card">
              <div className="interesting-img">
                <img src="/bloghappy.jpg" alt="" />
              </div>
              <div className="interesting-content-data">
                <h4>Blog | Social Media Marketing</h4>
                <h2>
                  La estrategia detrás del lanzamiento de un podcast para su
                  marca
                </h2>
                <p>
                  Atención a empresarios e influencers: ¡no hay mejor momento
                  para lanzar su propio podcast que ahora!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      <Footer />
    </Layout>
  );
};

export default Post;
