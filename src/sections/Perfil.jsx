import Header from "../components/Header";
import PageNav from "../components/PageNav";


const Perfil = ()=>{
  return(
    <section className={'section Perfil bg-[url(../img/perfil-m.png)] lg:bg-[url(../img/perfil.jp)n] bg-cover' +
      ' bg-center'}>
      <Header/>
      <h1 className="section__title">
        PERFIL PROFESIONAL
      </h1>
      <p>En Geôtica Grupo Empresarial realizamos estudios, proyectos, control y verificación de calidad, así como supervisión y gerencia integral de obras de infraestructura pública y privada, con un mayor énfasis en obras carreteras, aeroportuarias, ferroviarias y portuarias</p>
      <p>También participamos en otros campos de la infraestructura, tales como:</p>
      <ul className="Perfil__list">
        <li>Planificación Urbana y Regional.</li>
        <li>Desarrollo Rural.</li>
        <li>Proyectos Inmobiliarios.</li>
        <li>Complejos Turísticos.</li>
        <li>Logística y Transporte Multimodal.</li>
        <li>Entre otros.</li>
      </ul>
      <PageNav link={'/proposito'} type={'prev'}/>
      <PageNav link={'/presencia'} type={'next'}/>
    </section>
  )
}

export default Perfil
