import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import callToApi from "../services/Api.js";
import ls from '../services/localStorage.js';
import "../styles/App.scss";
import Footer from '../components/Footer/Footer.js';
import Form from '../components/Form/Form.js';
import Header from '../components/Header/Header.js';
import Preview from './Preview/Preview.js';
import GetAvatar from "./GetAvatar/GetAvatar.js";
import Home from './Home/Home';

function App() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [createCard, setCreateCard] = useState("");
  const [data, setData] = useState(ls.get("formData") || {
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
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

  const handleChangeForm = (param, value) => {
    const clonedData = { ...data, [param]: value };
    setData(clonedData);
  };

  const handleInput = (ev) => {
    const { id, value } = ev.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value === "",
    }));
  };

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

  useEffect(() => {
    ls.set("formData", data);
  }, [data]);

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <Preview data={data} />
        <Form
          data={data}
          errors={errors}
          handleInput={handleInput}
          url={url}
          successMessage={successMessage}
          handleClickCreateCard={handleClickCreateCard}
          errorMessage={errorMessage}
          handleChangeForm={handleChangeForm}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

