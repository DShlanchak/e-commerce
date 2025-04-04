import { Link} from "react-router-dom";
import { useAllProducts } from "../api/shopApi"
import Filters from "../components/product/Filters";

function AllProducts() {

  const { data: list, isLoading, isError } = useAllProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Download error</p>;

  return (
    <div>
      <h2>All Products</h2>
      <Filters/>
      <ul>
        {list.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllProducts;
