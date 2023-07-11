import { Link } from 'react-router-dom';
import '../../styles/home.scss';
import GetAvatar from '../GetAvatar/GetAvatar';

function Home() {
  const archivedProjects = [
    {
      id: 1,
      name: '',
      slogan: '',
      technologies: '',
      repo: '',
      demo: '',
      desc: '',
      autor: '',
      job: '',
      photo: '',
      image: '',
    },
    {
      id: 2,
      name: '',
      slogan: '',
      technologies: '',
      repo: '',
      demo: '',
      desc: '',
      autor: '',
      job: '',
      photo: '',
      image: '',
    },
  ];
  const renderList = () => {
    return archivedProjects.map((eachProject) => (
      <li>
        <GetAvatar eachProject={eachProject} />
      </li>
    ));
  };
  return (
    <div className='home'>
      <h1 className='home__title team-name'> The 90's developers </h1>
      <h1 className='home__title'>¿Te apetece conocer nuestros proyectos?</h1>
      <p className='home__text'>¡Estás en la web correcta!</p>
      <Link className='home__button--link' to='/main'>
        <button className='home__button'>Bienvenidxs</button>
      </Link>
      <ul>{renderList()}</ul>
    </div>
  );
}

export default Home;
