import { useRouter } from "next/router";
import { useGetByNameQuery } from '/store/pokeApi/pokeApi';
import { StyledDiv, StyledImg, StyledName, StyledH2 } from '../../styles/[id].styled';

export default function Pokemon() {
  const { query } = useRouter();
  const { data } = useGetByNameQuery(query.id);
 
  return (
    <StyledDiv><StyledH2>{data?.name}</StyledH2>
            <StyledImg
                src={data?.sprites.other.dream_world.front_default}
                alt={data?.name}
                width={200}
                height={200}
            ></StyledImg>
            <StyledName>Type: {data?.types[0].type.name}</StyledName>
            <StyledName>Stats: {data?.stats[0].base_stat}</StyledName></StyledDiv>);;
}