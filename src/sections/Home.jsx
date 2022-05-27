import Header from "../components/Header";
import PageNav from "../components/PageNav";


const Home = ()=>{
  return(
    <section className={'section Home bg-[url(../img/puente-transp-m.jpg)] lg:bg-[url(../img/puente-transp.jpg)] bg-cover bg-center'}>
      <Header/>
      <h1 className={'main-title'}>
        En las Obras Importantes <br/> de Infraestructura...
        <span>NOS LA INGENIAMOS POR TI!</span>
      </h1>
      <PageNav link={'/nosotros'} type={'next'}/>
    </section>
  )
}

export default Home
