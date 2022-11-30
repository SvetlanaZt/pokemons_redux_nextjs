import { StyledButton, StyledDiv } from './Button.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useLazyGetNextPageQuery } from '../../store/pokeApi/pokeApi';
import { setData } from '../features/userSlice';

export default function Buttons() {
  const dispatch = useDispatch();
  const nextPage = useSelector((state) => state.user.nextPage);
  const [fetchPokemons, { data }] = useLazyGetNextPageQuery();
  console.log(data)

  const goToPrev = (e) => {
    console.log(e)
  };
  const goToNext = () => {
    fetchPokemons(nextPage)
    dispatch(setData(data));
  };
  return (
        <StyledDiv>
            <StyledButton type="button" onClick={goToPrev}>Prev</StyledButton>
            <StyledButton type="button" onClick={goToNext}>Next</StyledButton>
        </StyledDiv>
  );
}
