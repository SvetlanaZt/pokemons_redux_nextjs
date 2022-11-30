import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './pokeApi/pokeApi';
// import { pokemonReducer } from './pokemon.slice.js';
import userSlice from '../components/features/userSlice';

export const store = configureStore({
  reducer: { [pokemonApi.reducerPath]: pokemonApi.reducer, user: userSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(pokemonApi.middleware),
});
