import '../styles/App.scss';
import cover2 from '../images/cover_2.jpeg';
import cover from '../images/cover.jpeg';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
import {useState} from 'react';

function App() {
  const [createCard, setCreateCard] = useState('');
  const [projectName, setProjectName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [tech, setTech] = useState('');
  const [desc, setDesc] = useState('');
  const [autor, setAutor] = useState('');
  const [job, setJob] = useState('');
  const [campo, setCampo] = useState('');

  const handleInput = (ev) => {
    if (ev.target.id === 'name') {
      setProjectName(ev.target.value);
    } else if (ev.target.id === 'slogan') {
      setSlogan(ev.target.value);
    } else if (ev.target.id === 'repo') {
      setRepo(ev.target.value);
    } else if (ev.target.id === 'demo') {
      setDemo(ev.target.value);
    } else if (ev.target.id === 'technologies') {
      setTech(ev.target.value);
    } else if (ev.target.id === 'desc') {
      setDesc(ev.target.value);
    } else if (ev.target.id === 'autor') {
      setAutor(ev.target.value);
    } else if (ev.target.id === 'job') {
      setJob(ev.target.value);
    }
  setCampo(ev.target.value);
  }


  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    if(createCard === '') {
      setCreateCard('')
    }
  }

  return (
    
    <div className="container">
      <header className="header">
        <p className="text">Proyectos Molones</p>
      </header>
      <main className="main">
        <section className="preview">
          <img className="image" src={cover} alt="" />

          <section className="autor">
            <section className="info-project">
              <p className="subtitle">{repo || 'Repo'}</p>
              <hr className="line" />

              <h2 className="title">{projectName || 'Nombre del proyecto'}</h2>
              <p className="slogan">{slogan || 'Slogan'}</p>
              <p className="desc">
                {desc}
              </p>
              <section className="technologies">
                <p className="text">{tech || 'Tecnologias'}</p>
                <p className="text">{demo || 'Demo'}</p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={user } alt="" />
              <p className="job">{job || 'Trabajo'}</p>
              <p className="name">{autor || 'Nombre'}</p>
            </section>
          </section>g
        </section>

        <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <fieldset className="project">
            <input
              className="input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
              onInput={handleInput}
            />
            <p>{(campo) ? '' : 'Este campo es obligatorio'}</p>
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              onInput={handleInput}
            />
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              onInput={handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              onInput={handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              onInput={handleInput}
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              onInput={handleInput}
            ></textarea>
          </fieldset>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="autor">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
              onInput={handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              onInput={handleInput}
            />
          </fieldset>

          <section className="buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img">
            <button className="btn-large" onClick={handleClickCreateCard}>
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href='./#' className="" target="_blank" rel="noreferrer"> </a>
          </section>
        </section>
      </main>
    </div>
    
  );
}

export default App;

