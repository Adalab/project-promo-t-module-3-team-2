import { useEffect, useState } from 'react';
import callToApi from '../services/Api.js';
import '../styles/App.scss';
import cover2 from '../images/cover_2.jpeg';
import cover from '../images/cover.jpeg';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
import ls from '../services/local-storage.js';

function App() {

  //estados
  const [createCard, setCreateCard] = useState('');
  const [data, setData] = useState({
    projectName: '',
    slogan: '',
    repo: '',
    demo: '',
    tech: '',
    desc: '',
    autor: '',
    job: '',
  });

  const [projectNameError, setProjectNameError] = useState(false);

  const [sloganError, setSloganError] = useState(false);

  const [repoError, setRepoError] = useState(false);

  const [demoError, setDemoError] = useState(false);

  const [techError, setTechError] = useState(false);

  const [descError, setDescError] = useState(false);

  const [autorError, setAutorError] = useState(false);

  const [jobError, setJobError] = useState(false);

  //useEffect
   useEffect (() => {
    callToApi ().then ((data) => {
      setCreateCard(data);
    });
  }, []);

  useEffect(() => {
    ls.set('data', data);
  }, [data]);
console.log(ls);
  //eventos
  const handleInput = (ev) => {
    if (ev.target.id === 'name') {
      data.projectName = ev.target.value;
      setProjectNameError(ev.target.value === '');
    }
    if (ev.target.id === 'slogan') {
      data.slogan = ev.target.value;
      setSloganError(ev.target.value === '');
    }
    if (ev.target.id === 'repo') {
      data.repo = ev.target.value;
      setRepoError(ev.target.value === '');
    }
    if (ev.target.id === 'demo') {
      data.demo = ev.target.value;
      setDemoError(ev.target.value === '');
    }
    if (ev.target.id === 'technologies') {
      data.tech = ev.target.value;
      setTechError(ev.target.value === '');
    }
    if (ev.target.id === 'desc') {
      data.desc = ev.target.value;
      setDescError(ev.target.value === '');
    }
    if (ev.target.id === 'autor') {
      data.autor = ev.target.value;
      setAutorError(ev.target.value === '');
    }
    if (ev.target.id === 'job') {
      data.job = ev.target.value;
      setJobError(ev.target.value === '');
    }
    setData({ ...data });
  };

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    const url = '';
    window.open(url, '_blank');
    return data;
    /* if (createCard === '') {
      setCreateCard('');
    } */
  };

 //renders

  return (
    <div className='container'>
      <header className='header'>
        <p className='text'>Proyectos Molones</p>
      </header>
      <main className='main'>
        <section className='preview'>
          <img className='image' src={cover} alt='' />

          <section className='autor'>
            <section className='info-project'>
              <p className='subtitle'>{data.repo || 'Repo'}</p>
              <hr className='line' />

              <h2 className='title'>
                {data.projectName || 'Nombre del proyecto'}
              </h2>
              <p className='slogan'>{data.slogan || 'Slogan'}</p>
              <p className='desc'>{data.desc}</p>
              <section className='technologies'>
                <p className='text'>{data.tech || 'Tecnologias'}</p>
                <p className='text'>{data.demo || 'Demo'}</p>
              </section>
            </section>

            <section className='info-autor'>
              <img className='image' src={user} alt='' />
              <p className='job'>{data.job || 'Trabajo'}</p>
              <p className='name'>{data.autor || 'Nombre'}</p>
            </section>
          </section>
        </section>

        <section className='form'>
          <h2 className='title'>Información</h2>

          <section className='ask-info'>
            <p className='subtitle'>Cuéntanos sobre el proyecto</p>
            <hr className='line' />
          </section>

          <fieldset className='project'>
            <input
              className={`input ${projectNameError ? 'error' : ''}`}
              type='text'
              placeholder='Nombre del proyecto'
              name='name'
              id='name'
              value={data.projectName}
              onInput={handleInput}
            />
            {projectNameError && (
              <p className='error-message'>* Este campo es obligatorio</p>
            )}
            <input
              className={`input ${sloganError ? 'error' : ''}`}
              type='text'
              name='slogan'
              id='slogan'
              placeholder='Slogan'
              value={data.slogan}
              onInput={handleInput}
            />
            {sloganError && (
              <p className='error-message'>* Este campo es obligatorio</p>
            )}
            <input
              className={`input ${repoError ? 'error' : ''}`}
              type='text'
              name='repo'
              id='repo'
              placeholder='Repo'
              onInput={handleInput}
            />
            {repoError && (
              <p className='error-message'>* Este campo es obligatorio</p>
            )}
            <input
              className={`input ${demoError ? 'error' : ''}`}
              type='text'
              placeholder='Demo'
              name='demo'
              id='demo'
              onInput={handleInput}
            />
            {demoError && (
              <p className='error-message'>* Este campo es obligatorio</p>
            )}
            <input
              className={`input ${techError ? 'error' : ''}`}
              type='text'
              placeholder='Tecnologías'
              name='technologies'
              id='technologies'
              onInput={handleInput}
            />
            {techError && (
              <p className='error-message'>* Este campo es obligatorio</p>
            )}
            <textarea
              className={`input ${descError ? 'error' : ''}`}
              type='text'
              placeholder='Descripción'
              name='desc'
              id='desc'
              onInput={handleInput}
            ></textarea>
            {descError && (
              <p className='error-message'>* Este campo es obligatorio</p>
            )}
          </fieldset>

          <section className='ask-info'>
            <p className='subtitle'>Cuéntanos sobre la autora</p>
            <hr className='line' />
          </section>

          <fieldset className='autor'>
            <input
              className={`input ${autorError ? 'error' : ''}`}
              type='text'
              placeholder='Nombre'
              name='autor'
              id='autor'
              onInput={handleInput}
            />
            {autorError && (
              <p className='error-message'>* Este campo es obligatorio</p>
            )}
            <input
              className={`input ${jobError ? 'error' : ''}`}
              type='text'
              placeholder='Trabajo'
              name='job'
              id='job'
              onInput={handleInput}
            />
            {jobError && (
              <p className='error-message'>* Este campo es obligatorio</p>
            )}
          </fieldset>

          <section className='buttons-img'>
            <button className='btn'>Subir foto de proyecto</button>
            <button className='btn'>Subir foto de autora</button>
          </section>
          <section className='buttons-img'>
            <button className='btn-large' onClick={handleClickCreateCard}>
              Crear Tarjeta
            </button>
          </section>

          <section className='card'>
            <span className=''> La tarjeta ha sido creada: </span>
            <a href='./#' className='' target='_blank' rel='noreferrer'>
              {' '}
            </a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
