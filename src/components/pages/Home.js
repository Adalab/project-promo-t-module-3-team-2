import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.scss';
function Home() {
  const archivedProjects = [
    {
      id: 1,
      name: 'Proyecto 1',
      slogan: 'Slogan del Proyecto 1',
      technologies: 'Tecnologías del Proyecto 1',
      repo: 'Enlace al Repositorio del Proyecto 1',
      demo: 'Enlace a la Demo del Proyecto 1',
      desc: 'Descripción del Proyecto 1',
      autor: 'Autor del Proyecto 1',
      job: 'Trabajo del Autor del Proyecto 1',
      photo: 'Enlace a la Foto del Autor del Proyecto 1',
      image: 'Enlace a la Imagen del Proyecto 1',
    },
    {
      id: 2,
      name: 'Proyecto 2',
      slogan: 'Slogan del Proyecto 2',
      technologies: 'Tecnologías del Proyecto 2',
      repo: 'Enlace al Repositorio del Proyecto 2',
      demo: 'Enlace a la Demo del Proyecto 2',
      desc: 'Descripción del Proyecto 2',
      autor: 'Autor del Proyecto 2',
      job: 'Trabajo del Autor del Proyecto 2',
      photo: 'Enlace a la Foto del Autor del Proyecto 2',
      image: 'Enlace a la Imagen del Proyecto 2',
    },
  ];
  const renderList = () => {
    return archivedProjects.map((project) => (
      <li key={project.id}>
        <div className="card">
          <img className="card__image" src={project.image} alt="" />
          <div className="card__content">
            <h2 className="card__title">{project.name}</h2>
            <p className="card__slogan">{project.slogan}</p>
            <p className="card__desc">{project.desc}</p>
            <p className="card__technologies">{project.technologies}</p>
            <div className="card__author">
              <img className="card__author-avatar" src={project.photo} alt="" />
              <div className="card__author-info">
                <p className="card__author-name">{project.autor}</p>
                <p className="card__author-job">{project.job}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    ));
  };
  return (
    <div className="home">
      <h1 className="home__title team-name">The 90's developers</h1>
      <h1 className="home__title">¿Te apetece conocer nuestros proyectos?</h1>
      <p className="home__text">¡Estás en la web correcta!</p>
      <Link className="home__button--link" to="/main">
        <button className="home__button">Bienvenidxs</button>
      </Link>
      <ul className="card-list">{renderList()}</ul>
    </div>
  );
}
export default Home;
