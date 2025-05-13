import Titulos from './Titulos/Titulos';
import pop from "../Imgs/pop.jfif";

const Home = () => {
  return (
    <div className="container py-5">
        <Titulos text={"Home"}/>
      <div className="row">
        <div className="col-md-9">
        <p>
        Los simpsom es una de las serires estadounidenses más populares de la historia. La serie fue creada por Matt Groening y se estrenó en 1989. La serie sigue las aventuras de la familia Simpson, que está compuesta por Homer, Marge, Bart, Lisa y Maggie. La serie ha sido aclamada por su humor satírico y su crítica social, y ha ganado numerosos premios a lo largo de los años.
        </p> 
        </div>     
      <div className="col-md-3">
        <img src={pop} alt="The simp" className="img-fluid"/>
      </div>
      </div>
    </div>
  );
}

export default Home;