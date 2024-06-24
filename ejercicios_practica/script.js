"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");




const pokemonIdOrName = 'bulbasaur'; 
const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    document.getElementById('pokeName').textContent = data.name;
    document.getElementById('pokeTypes').textContent = data.types.map(typeInfo => typeInfo.type.name).join(', ');
    document.getElementById('pokeStats').textContent = data.stats.map(statInfo => `${statInfo.stat.name}: ${statInfo.base_stat}`).join(', ');
  })
  .catch(error => {
    console.log('Error al obtener datos de Pokémon:', error);
   
  });
