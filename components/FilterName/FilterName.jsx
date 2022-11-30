import PropTypes from 'prop-types';
import { StyledInput } from './FilterName.styled';
import { useDispatch } from "react-redux";
import { setFilterName } from '../features/userSlice';

export default function FilterName() {
      const dispatch = useDispatch();
  return (<>
    <input
                type='text'
                placeholder='Filter'
                onChange={e => {
                    dispatch(setFilterName(e.target.value))
                }}
            />
  </>
  );
}

FilterName.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
