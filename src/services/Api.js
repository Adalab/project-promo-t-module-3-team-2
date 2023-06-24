
const callToApi = () => {

  const data = { projectName: '', slogan: '', repo: '', demo: '', tech: '', desc: '', autor: '', job: '' }
  
  return fetch('https://dev.adalab.es/api/projectCard', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data),

  })
    .then((response) => response.json())
    .then((data) => {

      console.log(data);

      if(data.success) {
        //crear enlace de la tarjeta
        <a target="_blank" rel="noreferrer" href={data.word}>{data.word}</a>
        
      }else{
        <p>{data.error}</p>
      }
    })
}

export default callToApi;