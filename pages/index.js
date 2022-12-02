import HeaderImg from "../components/HeaderImg/HeaderImg";
import Link from "next/link";
import Head from '../components/Head'
import FilterName from "../components/FilterName/FilterName";
import Pokemons from '../components/Pokemons/Pokemons';
import FormControl from '../components/FormControl/FormControl';
import FilterTypes from '../components/FilterTypes/FilterTypes';
import Buttons from '../components/Buttons/Buttons';
import {StyledHeader, StyledDiv, StyledDivPokemons, StyledPagination} from './index.styled'
import { useGetByNumberQuery, useGetByTypeQuery } from '../store/pokeApi/pokeApi';
import { useSelector, useDispatch } from "react-redux";
import { setData } from '../store/pokeApi/userSlice';
import { useState, useEffect } from "react";
import { Pagination } from 'antd';

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [couter, setCouter] = useState(0);

    const [current, setCurrent] = useState(3);

  const dispatch = useDispatch();

  const limit = useSelector((state) => state.user.formControl);

  const dataPokemons = useGetByNumberQuery({ limit, offset });
  const countData = dataPokemons?.data?.count;
  console.log(limit)

  useEffect(() => {
    setCouter(countData)
  }, [countData]);
    
  dispatch(setData(dataPokemons?.data));

  const pokemon = useSelector((state) => state.user.data);

  const type = useSelector((state) => state.user.type);
  const dataType = useGetByTypeQuery(type);

  const name = useSelector((state) => state.user.filterName)
  const filterName = pokemon?.results?.filter(i => i.name.includes(name));
  // console.log(filterName)

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
            <Link key={pokemon.pokemon.name} href={`/pokemons/${pokemon.name}`}>
              <Pokemons key={pokemon.pokemon.name} pokemons = {pokemon.pokemon.name} />
            </Link>
        )) : filterName?.map((pokemon) => (
            <Link key={pokemon.name} href={`/pokemons/${pokemon.name}`}>
              <Pokemons key={pokemon.name} pokemons = {pokemon.name} />
            </Link>
        ))}
      </StyledDivPokemons>
        <StyledPagination onChange={onChangePagination} total={couter} pageSize={limit} />
 </main>
    </>
  );
}
