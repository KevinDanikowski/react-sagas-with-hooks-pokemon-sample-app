import _ from 'lodash';

const setPokemonToLoading = (state, action) => {
  const {pokemonId} = action;
  const newPokemonsState = _.cloneDeep(state.pokemons);
  let specificPokemon = newPokemonsState.find(pokemon => pokemon.id === pokemonId);
  if (specificPokemon) {
    specificPokemon.loading = true;
  } else {
    const isHalographic = pokemonId.toString().indexOf('2') !== -1;

    newPokemonsState.push({id: pokemonId, backgroundColor: isHalographic ? 'lightpurple' : 'white', loading: true})
  }

  return newPokemonsState;
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      const newPokemonState = setPokemonToLoading(state, action);

      return { 
        ...state, 
        pokemons: newPokemonState
      };
    case 'GET_POKEMON_SAGA':
      const newPokemonStateSaga = setPokemonToLoading(state, action);

      return { 
        ...state, 
        pokemons: newPokemonStateSaga 
      };
    case 'POKEMON_RECEIVED':   
      const pokemonIndex = state.pokemons.findIndex(pokemon => pokemon.id === action.pokemon.id);
      const newPokeState = _.cloneDeep(state.pokemons)
      newPokeState.splice(pokemonIndex, 1, action.pokemon)

      return { ...state, pokemons: newPokeState };
    default:
      return state;
  }
};

export default reducer;