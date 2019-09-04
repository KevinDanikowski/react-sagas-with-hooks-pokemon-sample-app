import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reducer from './reducers';
import rootSaga from './sagas';
import * as serviceWorker from './serviceWorker';

import {BASE_POKEMONS} from './utils/constants';
import _ from 'lodash';

const pokemonsInitialState = [];

_.mapKeys(BASE_POKEMONS, (pokemonInfo, pokemonName) => {
  pokemonsInitialState.push({
    name: pokemonName,
    id: pokemonInfo.id,
    loading: true,
    backgroundColor: pokemonInfo.backgroundColor || 'white'
  })
})

const initialState = {
  pokemons: pokemonsInitialState
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
