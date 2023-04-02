import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return <input type="text" name="filter" onChange={handleFilter} />;
};
