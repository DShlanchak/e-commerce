import { Link} from "react-router-dom";
import { useState } from "react";
import { baseURL } from "../../../config";
import PriceBlock from "../PriceBlock";
import s from './index.module.css';



export default function ProductItem({ product, addToCart }) {
  const {id, image, title, price, discont_price} = product;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={s.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${id}`} className={s.link}>
        <div className={s.imageWrapper}>
          <img
            className={s.image}
            src={`${baseURL}${image}`}
            alt={title}
          />
        </div>
        <PriceBlock 
          price={price} 
          discont_price={discont_price}
        />
        <p className={s.title}>{title}</p>
      </Link>

      <div className={s.buttonWrapper}>
        {isHovered && (
          <button
            className={s.button}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

//сделать функцию addToCard: как получить ее из слайса?
// в слайсе она принимает product?
// добавить возможность настройки в зависимости от страницы или элемента, где он используется (как с отображением в фильтрах discounted items): 
// <Route path='products' element={<AllProducts/>} /> // ProductItem
// <Route path='products/:id' element={<SilgleProduct/>} /> // ProductDetails
//  <Route path='cart' element={<Cart/>} /> / CarttItem