import { NavLink } from 'react-router-dom';
import compass from '../img/compass.svg';

import logo from '../img/logo1.svg';
import { useEffect, useRef } from 'react';

const Welcome = (show) => {
  const video = useRef();
  useEffect(() => {
    // video.current.play()
  }, []);
  return (
    <section className={'Welcome'}>
      <div className="navLink">
        <NavLink className={'welcome__btn'} to={'home'}>
          ingresar
          <img src={compass} alt="compass" />
        </NavLink>
      </div>
      <div className={`video-container`}>
        <img src={logo} className={'main-logo'} alt="-logo" />
        <div className="video">
          <video
            autoPlay
            muted="muted"
            loop
            id="video"
            className={''}
            ref={video}
          >
            <source
              src={
                'https://tinonavarrodiaz.github.io/nh-digital-assets/Geotica_Intro.mp4'
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <h1 className={'main-title'}>Grupo Empresarial</h1>
    </section>
  );
};

export default Welcome;
