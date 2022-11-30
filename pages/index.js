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
import {setNextPage, setPrevPage} from '../components/features/userSlice'

export default function Home() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.user.formControl)
  const { data } = useGetByNumberQuery(number);

  dispatch(setNextPage(data?.next));
  dispatch(setPrevPage(data?.previous));
  
  const type = useSelector((state) => state.user.type);
  const dataType = useGetByTypeQuery(type);

  const name = useSelector((state) => state.user.filterName)
  const filterName = data?.results?.filter(i => i.name.includes(name))

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
    <Buttons/>
    </div>
  );
}
