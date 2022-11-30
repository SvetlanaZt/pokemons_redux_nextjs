import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  // tagTypes: ['Post'],
  endpoints: builder => ({
    getByNumber: builder.query({
      query: ({ limit, offset }) => `pokemon?limit=${limit}&offset=${offset}`,
      transformResponse: responce => responce,
      // providesTags: ['Post'],
    }),
    getByName: builder.query({
      query: name => `pokemon/${name}`,
      // providesTags: ['Post'],
    }),
    getByType: builder.query({
      query: type => `type/${type}`,
      // providesTags: ['Post'],
    }),
    getNextPage: builder.query({
      query: url => `${url}`,
      // providesTags: ['Post'],
    }),
  }),
});

export const { useGetByNumberQuery, useGetByNameQuery, useGetByTypeQuery, useLazyGetNextPageQuery } = pokemonApi;
