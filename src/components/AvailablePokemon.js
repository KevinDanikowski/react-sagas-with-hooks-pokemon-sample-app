import React from 'react';
import {useSelector} from 'react-redux';
import PokemonCard from './PokemonCard';

function AvailablePokemon() {
  const pokemons = useSelector(state => state.pokemons);

  

  return (
    <div className='available-pokemon-container'>
      {pokemons && pokemons.map(pokemon => <PokemonCard pokemonId={pokemon.id} />)}
    </div>
  );
}

export default AvailablePokemon;