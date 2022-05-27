import Header from "../components/Header";
import PageNav from "../components/PageNav";
import Form from "../components/Form";
import ContacData from "../components/ContactData";


const Contacto = ()=>{
  return(
    <section className={'section Software Contacto bg-[url(../img/contacto-m.png)] lg:bg-[url(../img/contacto.png)]' +
      ' bg-cover' +
      ' bg-center'}>
      <Header/>
      <article className="section-container">
        <h1 className="Software__title">
          Contacto
        </h1>
        <div className="Contacto__grid">
          <Form/>
          <ContacData/>
        </div>
      </article>
       
      <PageNav link={'/contexto'} type={'prev'}/>
    </section>
  )
}

export default Contacto
