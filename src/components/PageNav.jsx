import { NavLink } from 'react-router-dom';

import up from '../img/up.png';
import down from '../img/down.png';

const PageNav = ({ type, link, cname = '' }) => (
  <NavLink className={`arrowPage1 left-[50%] ${type} ${cname}`} to={link}>
    <img src={type === 'prev' ? up : down} alt="" />
  </NavLink>
);

export default PageNav;
