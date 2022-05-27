import Header from '../components/Header';
import PageNav from '../components/PageNav';

import agro from '../img/Otros_img001_1.jpg';
import dibujo from '../img/Otros_img003_3.jpg';

import otros from '../helpers/otros';

const createModal = (data) => {
  console.log(data);
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
  modal.addEventListener('click', (e) => {
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
    <section className={'section Contexto bg-cover bg-center'}>
      <Header />
      <article className="section-container">
        <h1 className="Contexto__title">
          <span>Otros Sectores</span>
          RESPONSABILIDAD Y COMPROMISO SOCIOAMBIENTAL
          <span>Contexto</span>
        </h1>
        <div className="Contexto__grid-new">
          <ul class="Contexto__list">
            <li>Contexto</li>
            <li>Infraestructura Educativa</li>
            <li>Infraestructura AgroIntustrial</li>
          </ul>
        </div>
      </article>
      <PageNav link={'/comunicacion'} type={'prev'} />
      <PageNav link={'/contacto'} type={'next'} />
    </section>
  );
};

export default Contexto;
