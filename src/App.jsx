import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './sections/Home';
import Nosotros from './sections/Nosotros';
import Proposito from './sections/Proposito';
import Perfil from './sections/Perfil1';
import Presencia from './sections/Presencia';
import Software from './sections/Software';
import Software1 from './sections/Software1';
import Software2 from './sections/Software2';
import Software3 from './sections/Software3';
import Software4 from './sections/Software4';
import Ingenieria from './sections/Ingenieria';
import Comunicacion from './sections/Comunicacion';
import Contexto from './sections/Contexto';
import Contacto from './sections/Contacto';
import { useEffect } from 'react';

import compass from './img/compass_all.png';

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--compass', compass);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/proposito" element={<Proposito />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/presencia" element={<Presencia />} />
      <Route path="/software" element={<Software />} />
      <Route path="/software1" element={<Software1 />} />
      <Route path="/software2" element={<Software2 />} />
      <Route path="/software3" element={<Software3 />} />
      <Route path="/software4" element={<Software4 />} />
      <Route path="/ingenieria" element={<Ingenieria />} />
      <Route path="/comunicacion" element={<Comunicacion />} />
      <Route path="/contexto" element={<Contexto />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default App;
