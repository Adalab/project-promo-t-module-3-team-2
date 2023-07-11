import { Link } from 'react-router-dom';
import '../../styles/home.scss';


function Home() {
  const archivedProjects = [
    {
      id: 1,
      name: 'Mari Carmen',
      slogan: 'Create your own card',
      technologies: 'JavaScript  React',
      repo: 'xxxxxxxxxxxxxx',
      demo: 'xxxxxxxxxxxxxx',
      desc: 'xxxxxxxxxxxxxx',
      autor: 'Mari Carmen',
      job: 'Desarrolladora Full Stack',
      photo: 'xxxxxxxxxxxxxx',
      image: 'xxxxxxxxxxxxxx',
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
        {/* <GetAvatar eachProject={eachProject} /> */}
        <h2> {eachProject.name}</h2>
        <h3>{eachProject.slogan}</h3>
        <p>{eachProject.technologies}</p>
        <p>{eachProject.desc}</p>
        <p>{eachProject.autor}</p>
        <p>{eachProject.job}</p>
        <a href={eachProject.repo}>
          <button>Github</button>
        </a>
        <a href={eachProject.demo}>
          <button>Demo</button>
        </a>
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
