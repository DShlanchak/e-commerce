import Filters from "../components/product/Filters";
import ProductList from '../components/product/ProductList';
import { useFilteredProducts } from '../hooks/useFilteredProducts';

export default function AllProducts() {
  const { filteredProducts, isLoading, isError } = useFilteredProducts({ discounted: true , from:'', to:''});


  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Download error</p>;

  return (
    <div>
      <h2>Sale</h2>
      <Filters/> 
      <ProductList data={filteredProducts} />
    </div>
  );
}