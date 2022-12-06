import { StyledH1, StyledDiv, StyledImg } from './HeaderImg.styled';
import img from '../../public/1_Yx8UKPOkev3JmjFP1O3jow.png';

export default function HeaderImg () {
  return <StyledDiv>
    <StyledH1>Poke API</StyledH1>
    <StyledImg src={img}
      alt="Picture of the author"
      width={100}
      height={100}
      priority={true} />
    
  </StyledDiv>;
}
