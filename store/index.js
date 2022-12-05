import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './pokeApi/pokeApi';
// import { pokemonReducer } from './pokemon.slice.js';
import userSlice from '../store/pokeApi/userSlice';
import { rootReducer } from '../store/pokeApi/userSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    user: userSlice,
    root: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(pokemonApi.middleware),
});
export const persistor = persistStore(store)