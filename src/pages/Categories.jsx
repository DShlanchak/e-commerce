import { useCategories } from "../api/shopApi"
import CategoryCard from "../components/category/CategoryCard";


export default  function Categories() {

  const { data: list, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Download error</p>;

  return (
    <div>
     <h2>Categories</h2>
     <ul>
       {list.map((category) => (
          <li key={category.id}>
            <CategoryCard category={category}/>
          </li>
        ))}
      </ul>
   </div>
  );
}
