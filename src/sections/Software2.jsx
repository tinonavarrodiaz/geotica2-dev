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
        <div className="Software__grid-n px-[1em]">
          <div className="column">
            <p className="column-title marco">
              PLANIFICACIÓN TÁCTICA Y ESTRATÉGICA PARA INVERSIONES EN PAVIMENTOS
            </p>
            <img className={'laptop'} src={hdm} alt="" />
            <img className={'laptop'} src={laptop} alt="" />
          </div>
        </div>
      </article>
      <PageNav link={'/software1'} type={'prev'} />
      <PageNav link={'/software3'} type={'next'} />
    </section>
  );
};

export default Software;
