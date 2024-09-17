function generateInfo(pokemon){
  console.log(pokemon)
  generateImage(pokemon)
}

function generateImage(pokemon){
  let pokeBg = document.querySelector(".pokemon")
  let pokePhoto = document.querySelector(".pokemon .pokeImage")

  pokePhoto.src = pokemon.data.sprites.front_default
  pokeBg.classList.add(pokemon.data.types[0].type.name)
}

function getTypes(pokeDiv,type){
  if(type.length>1)
    {
      return pokeDiv.innerHTML=`<p>${type[0].type.name} / ${type[1].type.name} </p>`
    }
  else{
      return pokeDiv.innerHTML=`<p>${type[0].type.name} </p>`
  }
}