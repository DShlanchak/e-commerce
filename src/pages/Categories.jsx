import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/shopSlice";
import { Link, Outlet } from "react-router-dom";

function Categories() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.shop.categories);

  useEffect(() => {
    if (status === "idle") dispatch(fetchCategories());
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Download error</p>;

  console.log(list)

  return (
    <div>
      <h2>Категории</h2>
      <ul>
        {list.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Categories;
