import HeaderImg from "../components/HeaderImg/HeaderImg";
import Head from '../components/Head'
import FilterName from "../components/FilterName/FilterName";
import Pokemons from '../components/Pokemons/Pokemons';
import FormControl from '../components/FormControl/FormControl';
import FilterTypes from '../components/FilterTypes/FilterTypes';
import {StyledHeader, StyledDiv, StyledDivPokemons, StyledPagination, StyledLink} from './index.styled'
import { useGetByNumberQuery, useGetByTypeQuery } from '../store/pokeApi/pokeApi';
import { useSelector, useDispatch } from "react-redux";
import { setData } from '../store/pokeApi/userSlice';
import { useState, useEffect } from "react";

export default function Home() {
  const [offset, setOffset] = useState(0);
  // const [couter, setCouter] = useState(0);

  const dispatch = useDispatch();

  const limit = useSelector((state) => state.user.formControl);

  const dataPokemons = useGetByNumberQuery({ limit, offset });
  const countData = dataPokemons?.data?.count;

  const data = dataPokemons?.data;

  useEffect(() => {
    dispatch(setData(data));
  }, [data, dispatch]);

  const pokemon = useSelector((state) => state.user.data);

  const type = useSelector((state) => state.user.type);
  const dataType = useGetByTypeQuery(type);
  // console.log(dataType?.data?.pokemon)

  const name = useSelector((state) => state.user.filterName)
  const filterName = pokemon?.results?.filter(i => i.name.includes(name));

  const onChangePagination = (evt) => {
   setOffset((evt - 1) * limit);
   };

  return (
    <>
      <Head />
      
      <StyledHeader>
        <HeaderImg />
        <FilterName/>
      <StyledDiv>
        <FormControl />
        <FilterTypes />
      </StyledDiv>
    </StyledHeader>
<main>
      <StyledDivPokemons>
        {(dataType?.data?.pokemon) ? dataType?.data?.pokemon?.map((pokemon) => (
            <StyledLink key={pokemon.pokemon.name} href={`/pokemons/${pokemon.name}`}>
              <Pokemons key={pokemon.pokemon.name} pokemons = {pokemon.pokemon.name} />
            </StyledLink>
        )) : filterName?.map((pokemon) => (
            <StyledLink key={pokemon.name} href={`/pokemons/${pokemon.name}`}>
              <Pokemons key={pokemon.name} pokemons = {pokemon.name} />
            </StyledLink>
        ))}
      </StyledDivPokemons>
        <StyledPagination onChange={onChangePagination} total={countData} pageSize={limit} />
 </main>
    </>
  );
}
