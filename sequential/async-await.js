const fetch = require("node-fetch");

// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((res) => res.json())
//   .then(data => {
//       data.results.forEach(element => {
//           console.log(element.name);          
//       });    
//   }).catch(errors => {
//       console.log('Ha ocurrido un error', errors);      
//   })


//ASYNC Y AWAIT
const connectedApi = async() => {
    try {
        const pokemones = await fetch('https://pokeapi.co/api/v2/pokemon');
        const resp = await pokemones.json();        
        resp.results.map(poke => console.log(poke.name));
    } catch (error) {
        console.log(error);
    }
}

connectedApi()
