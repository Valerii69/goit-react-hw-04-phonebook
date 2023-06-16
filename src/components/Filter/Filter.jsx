import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  // console.log(value);
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={value}
        autoComplete="on"
        onChange={onChange}
        placeholder="Enter name"
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
