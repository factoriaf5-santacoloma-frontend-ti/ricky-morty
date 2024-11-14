import {getData} from './api.js';



// document.write(JSON.stringify(data));

window.addEventListener('load', async ()=>{
  const data = await getData();
  console.log(data);

  const lista = document.createElement('ul');
  data.results.forEach(character =>{
    const char = document.createElement('li');
    const name = document.createElement('h2');
    const image = document.createElement('img');

    name.textContent=character.name;
    image.src=character.image;
    image.style.width="200px";
    image.style.height='auto';
    char.appendChild(name);
    char.appendChild(image);

    lista.appendChild(char);
  })
  document.getElementById('app').appendChild(lista);

})