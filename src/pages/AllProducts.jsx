import { Link} from "react-router-dom";
import { useAllProducts } from "../api/shopApi"
import Filters from "../components/product/Filters";

export default function AllProducts() {

  const { data: list, isLoading, isError } = useAllProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Download error</p>;

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
    </div>
  );
}


// сделать productCart
// посмотреть какие данные приходят
// настроить отображение
// return (
//   <div className={s.card_item}>
//     <Link to={`/products/${id}`}>
//     <div className={s.card}>
//       <img src={`http://localhost:3333${image}`} alt={title} />
//       <div className={s.info}>
//         <div className={s.price}>
//           <p className={s.actual_price}>{discont_price ?? price}<span>$</span>{" "}</p>
//           <p className={s.old_price}>{discont_price !== null ? `${price}$` : " "}</p>
//           <p className={s.discont}>{discont}</p>
//         </div>
//         <p className={s.title}>{title}</p>
//       </div>
//     </div>
//     </Link> 
//     <div className={s.add_btn} 
//       onClick={() => dispatch(addToCartAction({ id, image, title, price, discont_price }))}
//       >Add to cart
//     </div>
//   </div>
// )