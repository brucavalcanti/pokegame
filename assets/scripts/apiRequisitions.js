
let pokemon = 0;

function getPokemon(){
  pokemon = Math.floor(Math.random()*151)+1;
  const pokemonData = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
  pokemonData.then(generateInfo)
  pokemonData.catch(treatError)
}

function treatError(erro){
    console.log(erro.status)
}

getPokemon();
