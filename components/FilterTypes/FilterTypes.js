// import PropTypes from 'prop-types';
import { StyledDiv, StyledSelect, StyledP } from '../FormControl/FormControl.styled';
import { useDispatch } from "react-redux";
import { setType } from '../../store/pokeApi/userSlice';
import { Select } from 'antd';

export default function FilterTypes() { 
   const dispatch = useDispatch();
  
  return (
   <StyledDiv><StyledP>Choose Type</StyledP>
      <StyledSelect
        name="select"
        placeholder="Select a type"
        onChange={e => { dispatch(setType(e)) }}>
   <Select.Option value="all">all</Select.Option>
   <Select.Option value="water">water</Select.Option>
   <Select.Option value="grass">grass</Select.Option>
   <Select.Option value="fire">fire</Select.Option>
   <Select.Option value="bug">bug</Select.Option>
   <Select.Option value="normal">normal</Select.Option>
 </StyledSelect></StyledDiv>
  )
}