import { useSelector } from 'react-redux';
import { selectFilters } from '../redux/filter/selectors';
import { useAllProducts } from '../api/shopApi';
import { useMemo } from 'react';

export const useFilteredProducts = () => {
  const { data: products = [], isLoading, isError } = useAllProducts();
  const { from, to, discounted, sortBy } = useSelector(selectFilters);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products
      .filter((product) => {
        const min = parseFloat(from) || 0;
        const max = parseFloat(to) || Infinity;
        const priceOk = product.price >= min && product.price <= max;
        const hasDiscount = product.discont_price !== null && product.discont_price < product.price;
        const discountOk = !discounted || hasDiscount;
        return priceOk && discountOk;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'price_asc':
            return a.price - b.price;
          case 'price_desc':
            return b.price - a.price;
          case 'name_asc':
            return a.title.localeCompare(b.title);
          case 'name_desc':
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
  }, [products, from, to, discounted, sortBy]);

  return { filteredProducts, isLoading, isError };
};
