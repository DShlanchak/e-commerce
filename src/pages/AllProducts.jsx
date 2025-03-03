import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../redux/shopSlice";
import { Link, Outlet } from "react-router-dom";

import Filters from "../components/product/Filters";

function AllProducts() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.shop.allProducts);

  useEffect(() => {
    if (status === "idle") dispatch(fetchAllProducts());
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Download error</p>;

  console.log(list)

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
      <Outlet />
    </div>
  );
}

export default AllProducts;
