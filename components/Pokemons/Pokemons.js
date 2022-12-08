import { useGetByNameQuery } from '../../store/pokeApi/pokeApi';
import { StyledDiv, StyledImg, StyledName, StyledTypeStats } from './Pokemons.styled';

export default function Pokemons({ pokemons }) {
    const { data } = useGetByNameQuery(pokemons);
  
    return (<>
        <StyledDiv key={data?.id}>
            <StyledName>{data?.name}</StyledName>
            <StyledImg
                src={data?.sprites?.other?.dream_world?.front_default}
                alt={data?.name}
                width={200}
                height={200}
            />
            {data?.types.map(item =>
                <StyledTypeStats key={item.type.name} item={item.type.name}>Type: {item.type.name}</StyledTypeStats>)}
            <StyledTypeStats>Stats: {data?.stats[0].base_stat}</StyledTypeStats>
        </StyledDiv>
    </>);
}