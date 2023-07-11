import { Link } from 'react-router-dom';
import '../../styles/home.scss';

function Home() {
  return (
    <div className='home'>
      <h1 className='home__title team-name'> The 90's developers </h1>
      <h1 className='home__title'>¿Te apetece conocer nuestros proyectos?</h1>
      <p className='home__text'>¡Estás en la web correcta!</p>
      <Link className='home__button--link' to='/main'>
        <button className='home__button'>Bienvenidxs</button>
      </Link>
    </div>
  );
}

export default Home;
