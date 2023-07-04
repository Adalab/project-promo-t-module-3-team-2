import { Link } from "react-router-dom";
import "../../styles/home.scss";

function Home() {
  return (
    <div className="home">
      <h1 className="home__title"> The 90's developers </h1>
      <h1 className="home__title">¿Te apetece conocer nuestros proyectos?</h1>
      <p className="home__text">¡Estás en la web correcta!</p>
      <button className="home__button">
        <Link className="home__button--link" to="/main">
          Bienvenidxs
        </Link>
      </button>
    </div>
  );
}

export default Home;
