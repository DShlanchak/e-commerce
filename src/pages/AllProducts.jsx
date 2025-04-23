// import { Link} from "react-router-dom";
import { useAllProducts } from "../api/shopApi"
import Filters from "../common/Filters";
import ProductList from "../components/product/ProductList";


export default function AllProducts() {

  const { data, isLoading, isError } = useAllProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Download error</p>;

  return (
    <div>
      <h2>All Products</h2>
      <Filters/>
      <ProductList data={data}/>
    </div>
  );
}