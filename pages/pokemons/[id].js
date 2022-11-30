import { useRouter } from "next/router";
import { useGetByNameQuery } from '/store/pokeApi/pokeApi';
import Image from 'next/image'

export default function Pokemon() {
  const { query } = useRouter();
  const { data } = useGetByNameQuery(query.id);
 
  return (
    <><h2>{data?.name}</h2>
            <img
                src={data?.sprites.other.dream_world.front_default}
                alt={data?.name}
                width={200}
                height={200}
            ></img>
            <p>Type: {data?.types[0].type.name}</p>
            <p>Stats: {data?.stats[0].base_stat}</p></>);;
}