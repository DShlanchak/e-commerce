import { Link} from "react-router-dom";
import { useCategories } from "../api/shopApi"


function Categories() {

  const { data: list, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Download error</p>;
  // const dispatch = useDispatch();
  // const { list, status } = useSelector((state) => state.shop.categories);

  // useEffect(() => {
  //   if (status === "idle") dispatch(fetchCategories());
  // }, [dispatch, status]);

  // if (status === "loading") return <p>Loading...</p>;
  // if (status === "failed") return <p>Download error</p>;

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {list.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>
              <div>
                <img src={`http://localhost:3333${category.image}`} alt={category.title} />
                <p>{category.title}</p>
              </div>                 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

