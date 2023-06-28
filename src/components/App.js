import { useState } from "react";
import callToApi from "../services/Api.js";
import "../styles/App.scss";
import cover2 from "../images/cover_2.jpeg";

import logo from "../images/logo-adalab.png";


import Footer from '../components/Footer/Footer.js';
import Form from '../components/Form/Form.js';
import Header from '../components/Header/Header.js';
import Preview from './Preview/Preview.js';
import ls from '../services/localStorage.js';

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
      <Header />
      <main className="main">
        <Preview data={data} />
        <Form data={data} errors={errors} handleInput={handleInput} url={url} successMessage={successMessage} handleClickCreateCard={handleClickCreateCard} errorMessage={errorMessage}/>
      </main>
    </div>
  );
}

export default App;
