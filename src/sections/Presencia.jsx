import Header from '../components/Header';
import PageNav from '../components/PageNav';
import Map from '../components/Map';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import video from '../video/video1.mp4';
import plint from '../img/plint.png';
import meridiano from '../img/meridiano.png';
import ipsu from '../img/ipsu.png';
import geotica from '../img/logo_B-300x78.png';

const Presencia = () => {
  const map = useRef();
  const VideoEl = useRef();
  useEffect(() => {
    VideoEl.play;
    console.log(map.current);
  }, []);

  return (
    <section className={'section Presencia compass logoV bg-cover bg-center'}>
      <Header />
      <article ref={map} className="section-container">
        <h1 className="section__title">PRESENCIA NACIONAL</h1>
        <p className={'Presencia__text-title'}>
          Localización de cada intervención
        </p>
        <div class="video-mapa relative">
          <video
            ref={VideoEl}
            autoPlay
            playsInline
            muted="muted"
            disablePictureInPicture
            loop
            id="video"
            className="video-map"
          >
            <source src={video} type="video/mp4" />
          </video>
          <ul class="emp">
            <li>
              <img src={geotica} alt="" />
            </li>
            <li>
              <img src={plint} alt="" />
            </li>
            <li>
              <img src={meridiano} alt="" />
            </li>
            <li>
              <img src={ipsu} alt="" />
            </li>
          </ul>
        </div>
        <p className={'info'}>
          * Para acceder a un mayor detalle de nuestras participaciones o
          conocer el listado completo de nuestros servicios, favor de ponerse en{' '}
          <NavLink to={'/contacto'}> contacto </NavLink> con nosotros
        </p>
      </article>
      <PageNav link={'/perfil'} type={'prev'} />
      <PageNav link={'/software'} type={'next'} cname="no-mobile" />
      <PageNav link={'/software1'} type={'next'} cname="no-desktop" />
    </section>
  );
};

export default Presencia;
