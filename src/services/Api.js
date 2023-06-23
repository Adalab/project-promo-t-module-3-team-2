/*
// Fichero src/services/api.js
const callToApi = (data) => {
  // Llamamos a la API
  return fetch('https://dev.adalab.es/api/projectCard'{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'content-type': 'application/json',},
  }) 
    .then((response) => response.json())
    .then((response) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const result = {
        name: response.name,
        birthYear: response.birth_year,
        height: response.height,
        mass: response.mass,
        eyeColor: response.eye_color,
      };
      return result;
    });
};

export default callToApi;
*/

//Fichero src/services/api.js

const callToApi = (requestData) => {
  return fetch('https://dev.adalab.es/api/projectCard', {
    method: 'POST',
    body: JSON.stringify(requestData),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      const result = {
        image: requestData.image,
        projectName: data.projectName,
        slogan: data.slogan,
        repo: data.repo,
        demo: data.demo,
        tech: data.tech,
        desc: data.desc,
        autor: data.autor,
        job: data.job,
      };
      return result;
    });
};

export default callToApi;
