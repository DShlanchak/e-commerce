import { useAllProducts } from '../api/shopApi';
import { useMemo } from 'react';

export const useDiscountedProducts = () => {
  const { data: products = [], isLoading, isError } = useAllProducts();

  const discountedProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.discont_price !== null &&
        product.discont_price < product.price
    );
  }, [products]);

  return { discountedProducts, isLoading, isError };
};
