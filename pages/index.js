import Heading from "../components/Heading";
import Header from "../components/Header";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import FilterName from "../components/FilterName/FilterName";
import Pokemons from '../components/Pokemons/Pokemons';
import FormControl from '../components/FormControl/FormControl';
import FilterTypes from '../components/FilterTypes/FilterTypes';
import Buttons from '../components/Buttons/Buttons'
import { useGetByNumberQuery, useGetByTypeQuery } from '../store/pokeApi/pokeApi';
import { useSelector, useDispatch } from "react-redux";
import { setNextPage, setPrevPage, setData } from '../components/features/userSlice';
import { useLazyGetNextPageQuery } from '../store/pokeApi/pokeApi';
import { useState } from "react";

export default function Home() {
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();
  const number = useSelector((state) => state.user.formControl);

  const dataPokemons = useGetByNumberQuery({ number, offset });
  console.log(number);
  console.log(offset);

  console.log(dataPokemons?.data)
  dispatch(setData(dataPokemons?.data));

  const pokemon = useSelector((state) => state.user.data);
  // dispatch(setNextPage(pokemon?.next));
  // dispatch(setPrevPage(pokemon?.previous));

  const type = useSelector((state) => state.user.type);
  const dataType = useGetByTypeQuery(type);

  const name = useSelector((state) => state.user.filterName)
  const filterName = pokemon?.results?.filter(i => i.name.includes(name));
  // console.log(filterName)


  // const nextPage = useSelector((state) => state.user.nextPage);
  // const [fetchPokemons, { data }] = useLazyGetNextPageQuery();
  // console.log(data)
  
  const onClickNext = (evt) => {
    return setOffset(prev => prev + number);
    //  const response = await fetchPokemons(nextPage)
    //    dispatch(setData(response?.data));
    //    console.log(response?.data);
   };
  return (
    <div>
      <Heading text="Cписок пользователей"></Heading>
      <Header />
      <FilterName/>
      <FormControl />
      <FilterTypes/>
      <ul>
        {(dataType?.data?.pokemon) ? dataType?.data?.pokemon?.map((pokemon) => (
          <li key={pokemon.name}>
            <Link key={pokemon.pokemon.name} href={`/pokemons/${pokemon.name}`}>
              <Pokemons key={pokemon.pokemon.name} pokemons = {pokemon.pokemon.name} />
            </Link>
          </li>
        )) : filterName?.map((pokemon) => (
          <li key={pokemon.name}>
            <Link key={pokemon.name} href={`/pokemons/${pokemon.name}`}>
              <Pokemons key={pokemon.name} pokemons = {pokemon.name} />
            </Link>
          </li>
        ))}
      </ul>
      <Buttons onClick={ onClickNext } />
    </div>
  );
}
