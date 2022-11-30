import { StyledButton, StyledDiv } from './Button.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useLazyGetNextPageQuery } from '../../store/pokeApi/pokeApi';
import { setData } from '../features/userSlice';

export default function Buttons({onClick}) {
  // const dispatch = useDispatch();
  // const nextPage = useSelector((state) => state.user.nextPage);
  // const [fetchPokemons, { data }] = useLazyGetNextPageQuery();
  // console.log(data)

  // const goToPrev = (e) => {
  //   console.log(e)
  // };
  //  const goToNext = (e) => {
  //   console.log(e)
  // };

  // const goToNext = async () => {
  //   const response = await fetchPokemons(nextPage)
  //   if ('data' in response) {
  //     dispatch(setData(response.data.results));
  //     console.log(response.data.results);
  //   } 
  // };
  
  return (
        <StyledDiv>
            <StyledButton type="button" onClick={onClick}>Prev</StyledButton>
            <StyledButton type="button" onClick={onClick}>Next</StyledButton>
        </StyledDiv>
  );
}
