import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setFormControl } from '../../components/features/userSlice';
import { StyledDiv, StyledSelect, StyledP } from './FormControl.styled';

export default function FormControl() {
  const dispatch = useDispatch();

  return (
    <StyledDiv>
      <StyledP>Pagination</StyledP>
      <StyledSelect name="select" onChange={e => { dispatch(setFormControl(e.target.value))}}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </StyledSelect>
    </StyledDiv>
  );
}
FormControl.propTypes = {
  onChange: PropTypes.func.isRequired,
};
