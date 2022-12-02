import Image from "next/image";
import { useGetByNameQuery } from '../../store/pokeApi/pokeApi';
import {StyledDiv, StyledImg, StyledName, StyledTypeStats} from './Pokemons.styled'

export default function Pokemons({ pokemons }) {
    const { data } = useGetByNameQuery(pokemons);

    return (<>
        <StyledDiv item={data?.types[0].type.name} key={data?.id}>
            <StyledName>{data?.name}</StyledName>
            <StyledImg
                src={data?.sprites.other.dream_world.front_default}
                alt={data?.name}
                width={200}
                height={200}
            ></StyledImg>
            <StyledTypeStats>Type: {data?.types[0].type.name}</StyledTypeStats>
            <StyledTypeStats>Stats: {data?.stats[0].base_stat}</StyledTypeStats>
        </StyledDiv>
    </>);
}