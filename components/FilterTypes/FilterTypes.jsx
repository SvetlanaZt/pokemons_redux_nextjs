// import PropTypes from 'prop-types';
import { StyledDiv, StyledSelect, StyledP } from '../FormControl/FormControl.styled';
import { useGetByTypeQuery } from '../../store/pokeApi/pokeApi';
import { useDispatch } from "react-redux";
import { setType } from '../features/userSlice';
import { useSelector } from "react-redux";

// export default function FilterTypes () {
//   return (
//   <StyledDiv><StyledP>Choose Type</StyledP>
//   <StyledSelect name="select" onChange={(evt) => onChange(evt.target.value)}>
//   <option value="all">all</option>
//   <option value="water">water</option>
//   <option value="grass">grass</option>
//   <option value="fire">fire</option>
//   <option value="bug">bug</option>
//   <option value="normal">normal</option>
// </StyledSelect></StyledDiv>
//   );
// }
// FilterTypes.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };

export default function FilterTypes() { 
   const dispatch = useDispatch();
  
  return (
   <StyledDiv><StyledP>Choose Type</StyledP>
   <StyledSelect name="select" onChange={e => { dispatch(setType(e.target.value))}}>
   <option value="all">all</option>
   <option value="water">water</option>
   <option value="grass">grass</option>
   <option value="fire">fire</option>
   <option value="bug">bug</option>
   <option value="normal">normal</option>
 </StyledSelect></StyledDiv>
  )
}