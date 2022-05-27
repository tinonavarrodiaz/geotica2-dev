import Header from '../components/Header';
import PageNav from '../components/PageNav';
import ArrowsSvg from '../img/rayas.png';
import { useEffect, useState } from 'react';

const Comunicacion = () => {
  const [arrows, setArrows] = useState([]);
  useEffect(() => {
    const total = 25;
    for (let i = 0; i < total; i++) {
      arrows.push(i);
    }
    console.log(arrows);
  }, []);

  return (
    <section
      className={
        'section Software Comunicacion bg-[url(../img/recursos-m.png)]' +
        ' lg:bg-[url(../img/recursos.png)]' +
        ' bg-cover' +
        ' bg-center'
      }
    >
      <Header />
      <article className="section-container">
        <h1 className="Software__title">
          <span>Equipo y recursos</span>
          TECNOLOGÍA Y COMUNICACIÓN
        </h1>
        <ul className="Comunicacion__list">
          <li>• Equipos de cómputo e impresión de última generación.</li>

          <li>
            • Softwares especializados en distintas ramas de la ingeniería.
          </li>

          <li>
            • Drones profesionales para el monitoreo y control interno de
            proyectos.
          </li>

          <li>
            • Sistema central de control para el monitoreo, seguimiento y
            evaluación administrativa de contratos.
          </li>

          <li>• Sistema de telefonía y radiocomunicación 24/7.</li>
          <li>
            • Amplia flotilla de vehículos para las distintas necesidades de
            trabajo, sedán, de pasajeros, pick up y ejecutivos; todos de modelo
            reciente. ...
          </li>
        </ul>
        <div className="lineas">
          <div className="l-cont">
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
            <div className="linea" />
          </div>
        </div>
      </article>
      <PageNav link={'/ingenieria'} type={'prev'} />
      <PageNav link={'/contexto'} type={'next'} />
    </section>
  );
};

export default Comunicacion;
