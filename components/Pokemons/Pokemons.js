import Image from "next/image";
import { useGetByNameQuery } from '../../store/pokeApi/pokeApi';
import { useDispatch } from "react-redux";
import { setData } from '../features/userSlice';
import {StyledUl, StyledLi, StyledImg, StyledName, StyledTypeStats} from './Pokemons.styled'

export default function Pokemons({ pokemons }) {
    // console.log(pokemons)
    const { data } = useGetByNameQuery(pokemons);
    // console.log(data)
    // const dispatch = useDispatch();
    // dispatch(setData(data));

    return (<StyledUl>
        <StyledLi item={data?.types[0].type.name} key={data?.id}>
            <StyledName>{data?.name}</StyledName>
            <StyledImg
                src={data?.sprites.other.dream_world.front_default}
                alt={data?.name}
                width={200}
                height={200}
            ></StyledImg>
            <StyledTypeStats>Type: {data?.types[0].type.name}</StyledTypeStats>
            <StyledTypeStats>Stats: {data?.stats[0].base_stat}</StyledTypeStats>
        </StyledLi>
    </StyledUl>);
}