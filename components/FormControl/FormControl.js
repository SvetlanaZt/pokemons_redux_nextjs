// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setFormControl } from '../../store/pokeApi/userSlice';
import { StyledDiv, StyledSelect, StyledP } from './FormControl.styled';
import { Select } from 'antd';

export default function FormControl() {
  const dispatch = useDispatch();

  return (
    <StyledDiv>
      <StyledP>Pagination</StyledP>
      <StyledSelect
        name="select"
        onChange={e => { dispatch(setFormControl(e)) }}
        placeholder="Select a namber">
        <Select.Option value="10">10</Select.Option>
    <Select.Option value="20">20</Select.Option>
    <Select.Option value="50">50</Select.Option>
      </StyledSelect>
</StyledDiv>
  );
}
// FormControl.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };
