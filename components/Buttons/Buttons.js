import { StyledButton, StyledDiv } from './Button.styled';

export default function Buttons({onClickNext, onClickPrev}) {
  return (
        <StyledDiv>
            <StyledButton type="button" onClick={onClickPrev}>Prev</StyledButton>
            <StyledButton type="button" onClick={onClickNext}>Next</StyledButton>
        </StyledDiv>
  );
}
