import Header from '../components/Header';
import PageNav from '../components/PageNav';
import plint from '../img/plint.png';
import meridiano from '../img/meridiano.png';
import ipsu from '../img/ipsu.png';
import { useEffect, useRef } from 'react';

const empresas = [
  {
    name: 'PLINT',
    img: plint,
    url: 'http://www.plint.com.mx/',
  },
  {
    name: 'Meridiano',
    img: meridiano,
    url: 'http://www.meridianoingenieria.com.mx/',
  },
  {
    name: 'IPSU',
    img: ipsu,
    url: 'http://www.ipsu.com.mx/',
  },
];
const Nosotros = () => {
  const logosGrid = useRef();
  useEffect(() => {
    // const companies = [...logosGrid.current.querySelectorAll('a')]
    // const total = companies.length
    // setInterval(()=>{
    //   let active = logosGrid.current.querySelector('.is-active')
    //   let index = companies.indexOf(active)
    //   companies.map(el=>el.classList.remove('is-active'))
    //   index < total-1 ? companies[index+1].classList.add('is-active') : companies[0].classList.add('is-active')
    // },5000)
  }, []);

  return (
    <section
      className={
        'section Nosotros bg-[url(../img/nosotros-m.jpg)] lg:bg-[url(../img/nosotros.jpg)] bg-cover' +
        ' bg-center'
      }
    >
      <Header />
      <h1 className="section__title">Nuestro Grupo</h1>
      <article className="article Nosotros__grid bg-[rgba(0,0,0,.5)]">
        <div className="item-left">
          <h2 className="article__title ">
            Ingeniería Integral
            <span className="mt-[1em]">
              VÍAS TERRESTRES, TRANSPORTE, MOVILIDAD
            </span>
            <span>Planificación, Proyecto, Acompañamiento, Supervisión...</span>
          </h2>
          <div className="logos-grid" ref={logosGrid}>
            {empresas.map((el, i) => (
              <a
                key={i}
                className={`${i === 0 ? 'is-active' : ''}`}
                href={el.url}
                target="_blank"
              >
                <img
                  className={`${i === 2 ? 'ipsu' : ''}`}
                  src={el.img}
                  alt={el.name}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="item-right">
          <p>
            Geôtica Grupo Empresarial es una marca comercial compuesta por tres
            marcas de ingeniería, PLINT, MERIDIANO e IPSÚ, cuyas respectivas
            trayectorias en el campo de las vías terrestres, transporte y
            movilidad urbana, se han unido para dar cobertura a toda la
            geografía nacional. Directivos, personal y colaboradores con años de
            experiencia, aplican diariamente en su quehacer una concepción
            integral y clara de la ingeniería, orientada al desarrollo de la
            infraestructura del país y sus regiones, ya sean urbanas o rurales,
            para lograr de la mano de nuestros clientes el bienestar de las
            comunidades y sus habitantes.
          </p>
        </div>
      </article>
      <PageNav link={'/home'} type={'prev'} />
      <PageNav link={'/proposito'} type={'next'} />
    </section>
  );
};

export default Nosotros;
