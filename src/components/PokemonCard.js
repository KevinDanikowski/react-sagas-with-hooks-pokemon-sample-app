import React, {useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {POKEMON_IMAGE_ENDPOINT} from '../utils/constants';
import Attribute from './Attribute';

const PokemonCard = ({pokemonId, useSaga}) => {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => {
    return state.pokemons.find(pokemon => pokemon.id === pokemonId)
  });
  const callPokemon = useCallback(
      () => 
        dispatch({
          type: `GET_POKEMON${useSaga ? '_SAGA':''}`,
          pokemonId
        }),
    [dispatch, pokemonId, useSaga],
  )

  useEffect(() => {
    const getPokemon = () => callPokemon();

    getPokemon();
  }, [callPokemon])

  if (!pokemonId) {
    return <React.Fragment />
  }

  if (!pokemon || pokemon.loading) {
    return <div className='loading'>loading pokemon...</div>
  }

  const has2InId = pokemonId.toString().indexOf('2') !== -1;
  const isHalographic = [1,4,7].includes(pokemonId) || has2InId;

  return pokemonId && !pokemon.loading && (
    <div className={`pokemon-card ${isHalographic ? 'halographic' : ''}`} style={{backgroundColor: pokemon.backgroundColor}}>
      <img src={`${POKEMON_IMAGE_ENDPOINT}${pokemon.id}.png`} alt={pokemon.name} />
      <div className='pokemon-name'>{pokemon.name}</div>
      <Attribute attribute='Base Experience:' value={pokemon.base_experience} />
      <Attribute attribute='Height:' value={pokemon.height} />
      <Attribute attribute='Weight:' value={pokemon.weight} />
    </div>
  );
}

export default PokemonCard;
