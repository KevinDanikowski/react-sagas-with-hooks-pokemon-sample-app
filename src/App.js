import React from 'react';
import PokemonCard from './components/PokemonCard';
import RandomPokemon from './components/RandomPokemon';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='pokemon-container'>
        <PokemonCard pokemonId={1}/>
        <PokemonCard pokemonId={4}/>
        <PokemonCard pokemonId={7}/>
      </div>
      <RandomPokemon />
    </div>
  );
}

export default App;
