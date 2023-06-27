import { useState } from "react";
import callToApi from "../services/Api.js";
import "../styles/App.scss";
import cover2 from "../images/cover_2.jpeg";
import cover from "../images/cover.jpeg";
import logo from "../images/logo-adalab.png";
import user from "../images/user.jpeg";

function App() {
  const [createCard, setCreateCard] = useState("");
  const [data, setData] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image:
      "https://imagen.research.google/main_gallery_images/a-brain-riding-a-rocketship.jpg",
    photo:
      "https://imagen.research.google/main_gallery_images/a-brain-riding-a-rocketship.jpg",
  });

  const [url, setUrl] = useState("");

  const [errors, setErrors] = useState({
    name: false,
    slogan: false,
    repo: false,
    demo: false,
    technologies: false,
    desc: false,
    autor: false,
    job: false,
  });
  /*
  const [projectNameError, setProjectNameError] = useState(false);

  const [sloganError, setSloganError] = useState(false);

  const [repoError, setRepoError] = useState(false);

  const [demoError, setDemoError] = useState(false);

  const [techError, setTechError] = useState(false);

  const [descError, setDescError] = useState(false);

  const [autorError, setAutorError] = useState(false);

  const [jobError, setJobError] = useState(false);
*/
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleInput = (ev) => {
    if (ev.target.id === "name") {
      data.name = ev.target.value;
      //setProjectNameError(ev.target.value === "");
      setErrors({ ...errors, name: ev.target.value === "" });
    }
    if (ev.target.id === "slogan") {
      data.slogan = ev.target.value;
      //setSloganError(ev.target.value === "");
      setErrors({ ...errors, slogan: ev.target.value === "" });
    }
    if (ev.target.id === "repo") {
      data.repo = ev.target.value;
      //setRepoError(ev.target.value === "");
      setErrors({ ...errors, repo: ev.target.value === "" });
    }
    if (ev.target.id === "demo") {
      data.demo = ev.target.value;
      // setDemoError(ev.target.value === "");
      setErrors({ ...errors, demo: ev.target.value === "" });
    }
    if (ev.target.id === "technologies") {
      data.technologies = ev.target.value;
      // setTechError(ev.target.value === "");
      setErrors({ ...errors, technologies: ev.target.value === "" });
    }
    if (ev.target.id === "desc") {
      data.desc = ev.target.value;
      // setDescError(ev.target.value === "");
      setErrors({ ...errors, desc: ev.target.value === "" });
    }
    if (ev.target.id === "autor") {
      data.autor = ev.target.value;
      // setAutorError(ev.target.value === "");
      setErrors({ ...errors, autor: ev.target.value === "" });
    }
    if (ev.target.id === "job") {
      data.job = ev.target.value;
      // setJobError(ev.target.value === "");
      setErrors({ ...errors, job: ev.target.value === "" });
    }
    setData({ ...data });
  };

  /*
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();

    console.log(handleClickCreateCard);

    if (createCard === '') {
      setCreateCard('');
    };

    const renderSucces = (data) => {
      return<><span>La tarjeta ha sido creada:</span><a href={data.cardURL} className="succesMsg" target="_blank" rel="noreferrer"> {data.cardURL} </a></>
    };
    const renderError = (data) => {
      return<><p>Error al crear la tarjeta</p><a href={data.cardURL} className="errorMsg" target="_blank" rel="noreferrer"> {data.cardURL} </a></>
    };
  
    callToApi(data)
      .then((data) => {
        if (data.success) {
          setUrl(renderSucces(data));
        } else {
          setUrl(renderError(data));
        }
      });
    };
*/

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();

    if (createCard === "") {
      setCreateCard("");
    }

    callToApi(data).then((data) => {
      if (data.success) {
        setSuccessMessage(true);
        setErrorMessage(false);
        setUrl(data.cardURL);
      } else {
        setSuccessMessage(false);
        setErrorMessage(true);
        setUrl(data.cardURL);
      }
    });
  };

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
              <p className="subtitle">{data.repo || "Repo"}</p>
              <hr className="line" />

              <h2 className="title">{data.name || "Nombre del proyecto"}</h2>
              <p className="slogan">{data.slogan || "Slogan"}</p>
              <p className="desc">{data.desc}</p>
              <section className="technologies">
                <p className="text">{data.technologies || "Tecnologias"}</p>
                <p className="text">{data.demo || "Demo"}</p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job">{data.job || "Trabajo"}</p>
              <p className="name">{data.autor || "Nombre"}</p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <fieldset className="project">
            <input
              className={`input ${errors.name ? "error" : ""}`}
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
              value={data.name}
              onInput={handleInput}
            />
            {errors.name && (
              <p className="error-message">* Este campo es obligatorio</p>
            )}
            <input
              className={`input ${errors.slogan ? "error" : ""}`}
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              value={data.slogan}
              onInput={handleInput}
            />
            {errors.slogan && (
              <p className="error-message">* Este campo es obligatorio</p>
            )}
            <input
              className={`input ${errors.repo ? "error" : ""}`}
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              onInput={handleInput}
            />
            {errors.repo && (
              <p className="error-message">* Este campo es obligatorio</p>
            )}
            <input
              className={`input ${errors.demo ? "error" : ""}`}
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              onInput={handleInput}
            />
            {errors.demo && (
              <p className="error-message">* Este campo es obligatorio</p>
            )}
            <input
              className={`input ${errors.technologies ? "error" : ""}`}
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              onInput={handleInput}
            />
            {errors.technologies && (
              <p className="error-message">* Este campo es obligatorio</p>
            )}
            <textarea
              className={`input ${errors.desc ? "error" : ""}`}
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              onInput={handleInput}
            ></textarea>
            {errors.desc && (
              <p className="error-message">* Este campo es obligatorio</p>
            )}
          </fieldset>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="autor">
            <input
              className={`input ${errors.autor ? "error" : ""}`}
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
              onInput={handleInput}
            />
            {errors.autor && (
              <p className="error-message">* Este campo es obligatorio</p>
            )}
            <input
              className={`input ${errors.job ? "error" : ""}`}
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              onInput={handleInput}
            />
            {errors.job && (
              <p className="error-message">* Este campo es obligatorio</p>
            )}
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
            {successMessage && (
              <>
                <span className="successMsg">La tarjeta ha sido creada: </span>
                <a
                  href={url}
                  className="successMsg"
                  target="_blank"
                  rel="noreferrer"
                >
                  {url}
                </a>
              </>
            )}
            {errorMessage && (
              <>
                <p className="errorMsg">Error al crear la tarjeta</p>
                <a
                  href={url}
                  className="errorMsg"
                  target="_blank"
                  rel="noreferrer"
                >
                  {url}
                </a>
              </>
            )}
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
