import menu from '../helpers/menu';
import { NavLink } from 'react-router-dom';

const Menu = ({ cName }) => {
  const menuActive = (e) => {
    const t = e.target;
    let parent = t.parentElement;
    const submenu = t.firstElementChild;
    const submenus = [...parent.querySelectorAll('.submenu')];
    if (submenu.classList.contains('is-active')) {
      submenu.classList.remove('is-active');
    } else {
      submenus.map((el) => el.classList.remove('is-active'));
      submenu.classList.add('is-active');
    }
  };
  return (
    <ul className={`main-menu ${cName}`}>
      {menu.map((item) => (
        <li key={item.title} onClick={menuActive} className={'main-menu__item'}>
          {item.title === 'Inicio' ? (
            <NavLink to="/home">{item.title}</NavLink>
          ) : (
            item.title
          )}
          <ul className="submenu">
            {item.child.map((el) => (
              <li key={el.title} className="submenu__item">
                <NavLink className={'submenu__link'} to={`/${el.url}`}>
                  {el.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      ))}
      <li>
        <NavLink to="/contacto">Contacto</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
