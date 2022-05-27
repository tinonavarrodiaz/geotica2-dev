import Header from '../components/Header';
import PageNav from '../components/PageNav';

import ptv from '../img/software_img001_2.png';
import hdm from '../img/software_img001_1c.jpg';
import laptop from '../img/software_img001_1b.png';
import pix from '../img/pix4d.png';

const Software = () => {
  return (
    <section
      className={
        'section Software bg-[url(../img/software-m.png)] lg:bg-[url(../img/software.png)] bg-cover' +
        ' bg-center'
      }
    >
      <Header />
      <article className="section-container">
        <h1 className="Software__title">
          <span>Equipo y recursos</span>
          Software
        </h1>

        <div className="footer-page">
          <p>Además, contamos con el soporte de los siguientes paquetes:</p>
          <ul className="packages marco">
            <li>
              <span>MICROSOFT PROJECT&nbsp;</span>(gestión de proyectos: inicio,
              planeación, ejecución, seguimiento, control y cierre)
            </li>
            <li>
              <span>DISPAV-5&nbsp;</span>(diseño estructural de pavimentos)
            </li>
            <li>
              <span>AASHTO 93&nbsp;</span>(diseño estructural de pavimentos)
            </li>
            <li>
              <span>COMFAA&nbsp;</span>(análisis acn/pcn para pavimentos en
              aeropuertos)
            </li>
            <li>
              <span>NEODATA&nbsp;</span>(concursos, presupuestos y control de
              obra), entre otros.
            </li>
            <li>
              <span className={'uppercase'}>Quality Web 360&nbsp;</span> Sistema
              de gestión de calidad para procesos internos.
            </li>
          </ul>
        </div>
      </article>
      <PageNav link={'/software3'} type={'prev'} />
      <PageNav link={'/ingenieria'} type={'next'} />
    </section>
  );
};

export default Software;
