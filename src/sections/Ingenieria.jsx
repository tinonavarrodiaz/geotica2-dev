import Header from '../components/Header';
import PageNav from '../components/PageNav';

import dron from '../img/dron.jpg';
import img1 from '../img/ingenieria_img001_1.jpg';
import img2 from '../img/product_grx2_01.jpg';
import img3 from '../img/ingenieria_img001_3a.jpg';
import img4 from '../img/ingenieria_img001_4.jpg';
import { useRef, useEffect, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

const images = [dron, img1, img2, img3, img4];

const Ingenieria = () => {
  const scrollEl = useRef();
  useEffect(() => {
    console.dir(scrollEl.current.offsetTop);

    document.documentElement.style.setProperty(
      '--off-set-top',
      `${scrollEl.current.offsetTop}px`
    );
    document.documentElement.style.setProperty(
      '--off-set-height',
      `${scrollEl.current.offsetHeight}px`
    );
  }, []);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const scrollFunctions = () => {
    let currentScroll = scrollEl.current.scrollTop;
    scrollEl.current.scrollTo(0, currentScroll + 50);
  };
  return (
    <section
      className={
        'section Software Ingenieria bg-[url(../img/equipos-m.png)] lg:bg-[url(../img/equipos.png)]' +
        ' bg-cover' +
        ' bg-center'
      }
    >
      <Header />
      <article className="section-container">
        <h1 className="Software__title">
          <span>Equipo y recursos</span>
          EQUIPO DE INGENIERÍA
        </h1>
        <div ref={scrollEl} className="text-content scrol-b h-[20vh]">
          <p>
            En Geôtica Grupo Empresarial contamos con las herramientas de
            trabajo necesarias y suficientes para desarrollar cualquiera de las
            especialidades de nuestra disciplina. Incluso podemos sumar también
            herramientas de empresas amigas, con quienes desde hace varios años
            tenemos sólidas y confiables alianzas estratégicas, a efecto de unir
            recursos y experiencias cuando la carga de trabajo así nos lo
            demanda, logrando con ello una mayor integralidad y una
            disponibilidad siempre total en beneficio de nuestros clientes:
          </p>
          <ul className="lista_equipos">
            <li>
              Equipo para mediciones en pavimentos, Índice de Rugosidad
              Internacional, Levantamiento de Deterioros, Profundidad de
              Roderas, Deflexiones, Coeficiente de Fricción, Macrotextura, Radar
              de Penetración, Retroreflexión en Señalamiento Horizontal y
              Vertical…
            </li>
            <li>
              Equipo Dron Mavic 2 Pro de tecnología avanzada, para fotografía
              aérea, planificación, diseño, supervisión y monitoreo de
              infraestructura y activos.
            </li>
            <li>
              Equipos de Laboratorio para Control de Calidad y Ensaye de
              Materiales: terracerías y pavimentos, incluyendo asfaltos y
              concretos hidráulicos.
            </li>
            <li>Equipo Geotécnico para exploración, análisis y diseño.</li>
            <li>
              Equipos topográficos de alta tecnología para verificación y
              control de obra ejecutada, así como de geometrías y trazos de
              proyecto, niveles láser, estaciones totales, GPS postproceso, RTK,
              Escáner láser 3D.
            </li>
            <li>
              Receptor GNSS GRX2 para operación RTK como estación total robótica
              o receptor estático...
            </li>
          </ul>
        </div>
        <MobileView>
          <p className="flex justify-end">
            <i onClick={scrollFunctions} className="icon-chevron-down"></i>
          </p>
        </MobileView>
        <BrowserView>
          <div className="Ingenieria__grid">
            {images.map((img, i) => (
              <div key={i} className={'imgContainer'}>
                <img key={i} src={img} alt="" />
              </div>
            ))}
          </div>
        </BrowserView>
        <MobileView>
          <div style={{ padding: `0 ${chevronWidth}px`, height: '100px' }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={2}
              gutter={20}
              leftChevron={<button>{'<'}</button>}
              rightChevron={<button>{'>'}</button>}
              outsideChevron
              infiniteLoop
              chevronWidth={chevronWidth}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className={'imgContainer-mobile'}
                  style={{ height: '100px' }}
                >
                  <img key={i} src={img} alt="" />
                </div>
              ))}
            </ItemsCarousel>
          </div>
        </MobileView>
      </article>
      <PageNav link={'/software'} type={'prev'} cname="no-mobile" />
      <PageNav link={'/software4'} type={'prev'} cname="no-desktop" />
      <PageNav link={'/comunicacion'} type={'next'} />
    </section>
  );
};

export default Ingenieria;
