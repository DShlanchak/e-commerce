import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filter/slice';
import { selectFilters } from '../redux/filter/selectors';

export const useFilters = () => {
  const dispatch = useDispatch();
  const values = useSelector(selectFilters);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch(setFilter({ name, value: type === 'checkbox' ? checked : value }));
  };

  return {
    values,
    handleChange,
  };
};