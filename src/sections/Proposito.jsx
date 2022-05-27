import Header from "../components/Header";
import PageNav from "../components/PageNav";


const Proposito = ()=>{
  return(
    <section className={'section Proposito compass logoV bg-cover bg-center'}>
      <Header/>
      <h2 className="section__title">
        NUESTRO PROPÓSITO
      </h2>
      <p className="marco">
        Desarrollar soluciones creativas que mejoren la vida de las comunidades.
      </p>
      <h2 className="section__title">
        Valores
      </h2>
      <ul className="Proposito__list">
        <li>Nuestras habilidades, creatividad y dinamismo están cimentadas en nuestra actitud individual y del equipo.</li>
        <li>Somos empáticos con nuestros clientes y determinados en que la ética y la disciplina envuelvan nuestro trabajo.</li>
        <li>Nos distingue la pasión, la perseverancia y la gratitud con nuestro mundo.</li>
      </ul>
      <PageNav link={'/nosotros'} type={'prev'}/>
      <PageNav link={'/perfil'} type={'next'}/>
    </section>
  )
}


export default Proposito
