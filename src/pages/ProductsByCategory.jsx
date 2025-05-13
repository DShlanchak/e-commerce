import { useParams } from "react-router-dom";
import { useProductsByCategory } from "../api/shopApi";
import ProductList from "../components/product/ProductList";

export default function ProductsByCategory() {
  const { categoryId } = useParams();
  const {
    data: { category, products } = {},
    isLoading,
    isError,
  } = useProductsByCategory(categoryId);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products.</p>;
  if (!products?.length) return <p>No products in this category.</p>;

  return (
    <div>
      <h2>{category.title}</h2>
      <ProductList data={products} />
    </div>
  );
}
