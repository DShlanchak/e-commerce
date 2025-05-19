import { Link} from "react-router-dom";
import { useState } from "react";
import { baseURL } from "../../../config";
import s from './index.module.css';


export default function ProductItem({ product, addToCart }) {
  const [isHovered, setIsHovered] = useState(false);
  const hasDiscount = product.discont_price !== null;
  const discountPercent = hasDiscount
    ? Math.round(((product.price - product.discont_price) / product.price) * 100)
    : 0;

  return (
    <div
      className={s.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`} className={s.link}>
        <div className={s.imageWrapper}>
          <img
            className={s.image}
            src={`${baseURL}${product.image}`}
            alt={product.title}
          />
        </div>
        <div className={s.priceBlock}>
          <span className={s.currentPrice}>
            {hasDiscount ? product.discont_price : product.price}
            <span>$</span>
          </span>
          {hasDiscount && (
            <>
              <span className={s.oldPrice}>{product.price}$</span>
              <span className={s.discount}>-{discountPercent}%</span>
            </>
          )}
        </div>
        <p className={s.title}>{product.title}</p>
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
// вынести в отдельный переиспользуемый модуль priceBlock, 
// добавить возможность настройки в зависимости от страницы или элемента, где он используется (как с отображением в фильтрах discounted items): 
// <Route path='products' element={<AllProducts/>} /> // ProductItem
// <Route path='products/:id' element={<SilgleProduct/>} /> // ProductDetails
//  <Route path='cart' element={<Cart/>} /> / CarttItem