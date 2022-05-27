import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ContactText from './ContactText';
import logo from '../img/logo.svg';
import ct from '../img/contact-text.svg';
import Menu from './Menu';
const Header = () => {
  const toggle = useRef();
  const [active, setActive] = useState(false);
  const menuToggle = () => {
    active ? setActive(false) : setActive(true);
  };
  const menuAction = () => {};
  return (
    <header className="main-header">
      <NavLink to={'/home'}>
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <nav className="main-nav">
        <div className="toggle-menu">
          <button
            className={`hamburger hamburger--collapse ${
              active ? 'is-active' : ''
            }`}
            type="button"
            onClick={menuToggle}
            ref={toggle}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        <NavLink className={'contact-link'} to={'/contacto'}>
          <img src={ct} alt="" />
        </NavLink>
        <Menu cName={active ? 'is-active' : ''} />
      </nav>
    </header>
  );
};

export default Header;
