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
        <div className="Software__grid-n">
          <div className="column">
            <p className="column-title marco before:translate-x-0 pl-[.5em] pt-[.5em]">
              SIMULACIONES DINÁMICAS DEL TRÁNSITO Y TRANSPORTE EN VIALIDADES E
              INTERSECCIONES
            </p>
            <img className={'ptv'} src={ptv} alt="" />
            <p className="column-list">
              <span>.PTV VISUM</span>, para la planificación estratégica del
              tránsito y el transporte.
            </p>
            <p className="column-list">
              <span>.PTV VISIM</span>, herramienta fundamental para el análisis
              de la operación del transporte.
            </p>
            <p className="column-list">
              <span>.PTV VISTRO</span>, para la determinación de niveles de
              servicio en vialidades e intersecciones
            </p>
          </div>
        </div>
      </article>
      <PageNav link={'/presencia'} type={'prev'} />
      <PageNav link={'/software2'} type={'next'} />
    </section>
  );
};

export default Software;
