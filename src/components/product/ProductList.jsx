import GridList from '../../common/GridList';
import ProductItem from './ProductItem';

export default function ProductList({ data }) {
  return (
    <GridList>
      {data.map((product) => (
        <li key={product.id}>
          <ProductItem product={product} />
        </li>
      ))}
    </GridList>
  );
}