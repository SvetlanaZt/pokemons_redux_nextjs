import { useRouter } from "next/router";
import { useGetByNameQuery, useGetBySpeciesQuery } from '/store/pokeApi/pokeApi';
import { StyledDiv, StyledImg, StyledPLi, StyledH2, StyledDivWraper, StyledP, StyledUl, StyledDivDescription, StyledProgress, StyledSpan,StyledDivHome, StyledTitleProgress, StyledHText,StyledPText, StyledDivEggs, StyledPEggs, StyledButton } from '../../styles/[id].styled';
import Router from 'next/router';


export default function Pokemon() {
  const { query } = useRouter();
  const { data } = useGetByNameQuery(query.id);
  
  const name = data?.species?.name;
  const takeData = useGetBySpeciesQuery(name);
  const text = takeData?.data?.flavor_text_entries[0]?.flavor_text;
  const eggGroups = takeData?.data?.egg_groups;
  
  return (
    <StyledDivHome>
      <StyledDiv>
        <div>
          <StyledButton type="button" onClick={() => Router.back()}>Go Back</StyledButton>
          <StyledH2>{data?.name}</StyledH2>
            <StyledImg
                src={data?.sprites.other.dream_world.front_default}
                alt={data?.name}
          ></StyledImg></div>
          <StyledDivWraper>
          <StyledP> Weight: <StyledSpan><br/>{data?.weight}</StyledSpan></StyledP>
          <StyledP> Height: <StyledSpan><br/>{data?.height}</StyledSpan></StyledP>
           {data?.types.map(item =>
        <StyledP key={item.type.name}>Type: <StyledSpan><br/>{item.type.name}</StyledSpan></StyledP>)}
            </StyledDivWraper></StyledDiv>
      <StyledDivDescription>
        <StyledHText>Description:</StyledHText>
        <StyledPText>{text}</StyledPText>
        <StyledHText>Stats:</StyledHText>
      <StyledUl>
      {data?.stats.map(item =>
        <StyledPLi key={item.stat.name}>
          <StyledTitleProgress>{item.stat.name}</StyledTitleProgress>
        <StyledProgress status='normal' percent={item.base_stat} size="small" /></StyledPLi>)}
        </StyledUl>
        <StyledDivEggs> <div><StyledHText>Egg Groups: </StyledHText>
          {eggGroups?.map(i => <StyledPEggs key={i.name}>{ i.name}</StyledPEggs>)}
          </div>
      <img
          src={data?.sprites?.other?.home?.front_default}
          alt={data?.name}
          width={150}
          height={150}
        ></img>
        </StyledDivEggs></StyledDivDescription>
    </StyledDivHome>);;
}
