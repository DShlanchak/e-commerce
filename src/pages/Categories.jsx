import { useCategories } from "../api/shopApi"
import CategoryList from "../components/category/CategoryList";


export default  function Categories() {

  const { data, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Download error</p>;

  return (
    <div>
      <h2>Categories</h2>
      <CategoryList data={data}/>
    </div>
  );
}
