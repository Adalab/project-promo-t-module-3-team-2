import { Link } from "react-router-dom";
import "../../styles/home.scss";

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">¿Personaje de los 90s caído en el olvido?</h1>
      <p className="home__text">¡Estás en la web correcta!</p>
      <button className="home__button">
        <Link className="home__button--link" to="/main">
          DABUTI COLEGA
        </Link>
      </button>
    </div>
  );
}

export default Home;
