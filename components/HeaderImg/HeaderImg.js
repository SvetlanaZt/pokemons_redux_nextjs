import { StyledH1, StyledDiv, StyledImg } from './HeaderImg.styled';

export default function HeaderImg () {
  return <StyledDiv>
    <StyledH1>Poke API</StyledH1>
    <StyledImg src="/1_Yx8UKPOkev3JmjFP1O3jow.png"
        alt="Picture of the author"
        width={100}
        height={100}/>
  </StyledDiv>;
}
