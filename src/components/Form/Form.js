import GetAvatar from "../Get Avatar/GetAvatar";

const Form = (props,handleChangeForm) => {
    
    
    const handleImage = (fileImage) => {
        handleChangeForm('image', fileImage)
    }

    const handlePhoto = (filePhoto) => {
        handleChangeForm('photo', filePhoto)
    }
  

    

    return (
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
                    value={data.name} //props.algo?
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

                <GetAvatar 
                text = "Subir foto de proyecto"
                avatar = {data.image}
                updateAvatar = {handleImage}/>
                <GetAvatar 
                text = "Subir foto de autora"
                avatar = {data.photo}
                updateAvatar = {handlePhoto}/>

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
    );
};
export default Form;