import Header from '../components/Header';
import PageNav from '../components/PageNav';

import agro from '../img/agro-m.png';
import dibujo from '../img/Otros_img003_3.jpg';

import otros from '../helpers/otros';

const createModal = (data) => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal__container">
      <div class="modal__close"></div>
      <h2>${data.title}</h2>
      <modal__text>
        ${data.text}
      </modal__text>
    </div>
  `;
  document.body.appendChild(modal);
  document.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('modal') ||
      e.target.classList.contains('modal__close')
    ) {
      modal.remove();
    }
  });
};

const Contexto = () => {
  const modal = (e) => {
    const Target = e.target;
    const dataName = Target.dataset.name;
    const data = otros.filter((el) => el.name === dataName);
    createModal(data[0]);
  };
  return (
    // <section className={'section Contexto bg-cover bg-center'}>
    <section
      className={'section Software Ingenieria Contexto bg-cover bg-center'}
    >
      <Header />
      <article className="section-container">
        <p className="main-title">Otros Recursos</p>
        <h1 className="Contexto__title">
          RESPONSABILIDAD Y COMPROMISO SOCIOAMBIENTAL
        </h1>
        <div className="Contexto__grid">
          <div className="text">
            <p className="set-title mt-[1rem]">CONTEXTO</p>
            <p>
              Desde 2009 Geôtica Grupo Empresarial ha venido distribuyendo su
              tiempo en diversos proyectos sociales y empresariales, procurando
              dar a cada iniciativa o intervención, un sentido de
              responsabilidad y compromiso social y ambiental, haciendo alianzas
              estratégicas con empresas amigas que comparten sus mismos valores
              y visión, empezando a incursionar, discretamente, en los
              sectores&nbsp;
              <span class="resaltar">
                agroindustrial, educativo, deportivo, cultural&nbsp;
              </span>
              y próximamente en lo turístico, inmobiliario y energético, con una
              visión ética y de largo plazo, que busque siempre el desarrollo
              económico, social y medioambiental de las personas y sus
              comunidades, como parte fundamental de nuestra competitividad.
            </p>
          </div>
          <div className="imeges-grid">
            <div onClick={modal} data-name="agro" className="Contexto__img">
              <img onClick={modal} data-name="agro" src={agro} alt="" />
              <p onClick={modal} data-name="agro">
                Infraestuctura AgroIndustrial
              </p>
            </div>
            <div
              onClick={modal}
              data-name="educativa"
              className="Contexto__img"
            >
              <img
                onClick={modal}
                className="opacity-40"
                data-name="educativa"
                src={dibujo}
                alt=""
              />
              <p onClick={modal} data-name="educativa">
                INFRAESTRUCTURA EDUCATIVA, DEPORTIVA Y CULTURAL
              </p>
            </div>
            {/* <p className="nota">Click en las imágenes para conocer más</p> */}
          </div>
        </div>
      </article>
      <PageNav link={'/comunicacion'} type={'prev'} />
      <PageNav link={'/contacto'} type={'next'} />
    </section>
  );
};

export default Contexto;
