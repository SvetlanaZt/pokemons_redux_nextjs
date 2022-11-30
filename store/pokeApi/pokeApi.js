import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getByNumber: builder.query({
      query: limit => `pokemon?limit=${limit}`,
      transformResponse: responce => responce,
    }),
    getByName: builder.query({
      query: name => `pokemon/${name}`,
    }),
    getByType: builder.query({
      query: type => `type/${type}`,
    }),
    getNextPage: builder.query({
      query: url => `${url}`,
    }),
  }),
});

export const { useGetByNumberQuery, useGetByNameQuery, useGetByTypeQuery, useLazyGetNextPageQuery } = pokemonApi;
