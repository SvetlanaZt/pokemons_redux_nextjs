// import PropTypes from 'prop-types';
import { StyledInput } from './FilterName.styled';
import { useDispatch } from "react-redux";
import { setFilterName } from '../../store/pokeApi/userSlice';

export default function FilterName() {
      const dispatch = useDispatch();
  return (<>
    <StyledInput
         type='text'
         placeholder='Filter'
          onChange={e => {
          dispatch(setFilterName(e.target.value))
                }}
            />
  </>
  );
}
