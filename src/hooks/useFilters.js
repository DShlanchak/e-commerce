import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilters, updateSort } from '../redux/filter/actions';

export function useFilters() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ from: '', to: '', discounted: false });
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    dispatch(updateFilters(
        { 
          priceRange: { from: filters.from, to: filters.to }, 
          discounted: filters.discounted 
        }
      )
    );
  }, [filters, dispatch]);

  useEffect(() => {
    dispatch(updateSort(sortBy));
  }, [sortBy, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleDiscountChange = (e) => {
    setFilters((prev) => ({ ...prev, discounted: e.target.checked }));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return {
    filters,
    sortBy,
    handleInputChange,
    handleDiscountChange,
    handleSortChange,
  };
}
