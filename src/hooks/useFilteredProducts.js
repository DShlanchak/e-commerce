import { useSelector } from 'react-redux';
import { selectFilters } from '../redux/filter/selectors';
import { useAllProducts } from '../api/shopApi';
import { useMemo } from 'react';

export const useFilteredProducts = (options = {}) => {
  const reduxFilters = useSelector(selectFilters);

  const {
    from = reduxFilters.from,
    to = reduxFilters.to,
    sortBy = reduxFilters.sortBy,
    discounted = reduxFilters.discounted,
  } = options;

  const { data: products = [], isLoading, isError } = useAllProducts();

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    const min = parseFloat(from) || 0;
    const max = parseFloat(to) || Infinity;

    return products
      .filter((product) => {
        const price = product.discont_price !== null ? product.discont_price : product.price;
        const priceOk = price >= min && price <= max;

        const hasDiscount = product.discont_price !== null && product.discont_price < product.price;
        const discountOk = !discounted || hasDiscount;

        return priceOk && discountOk;
      })
      .sort((a, b) => {
        const getEffectivePrice = (p) => p.discont_price !== null ? p.discont_price : p.price;

        switch (sortBy) {
          case 'price_asc':
            return getEffectivePrice(a) - getEffectivePrice(b);
          case 'price_desc':
            return getEffectivePrice(b) - getEffectivePrice(a);
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
