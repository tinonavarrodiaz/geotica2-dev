import { useState } from 'react';
import logo from '../img/Recurso1.png';

const ContacData = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <div className={'Contacto__data'}>
      <img src={logo} alt="Logo" className="max-w-[150px]" />
      <p className="year">© {year} Geôtica Grupo Empresarial</p>
      <p>Todos los derechos reservados</p>
      <a href="mailto:contacto@geotica.com.mx">contacto@geotica.com.mx</a>
      <a href="tel:3336152823">+52 (33) 3615-2823</a>
      <a href="tel:3336150369">+52 (33) 3615-0369</a>
      <a href="tel:3336126247">+52 (33) 3612-6247</a>
    </div>
  );
};

export default ContacData;
