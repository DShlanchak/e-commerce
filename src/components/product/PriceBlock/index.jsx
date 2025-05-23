import React from 'react'
import s from './index.module.css';

export default function PriceBlock({price, discont_price  }) {
    const hasDiscount = discont_price !== null;
    const discountPercent = hasDiscount
    ? Math.round(((price - discont_price) / price) * 100)
    : 0;

    return (
        <div className={s.priceBlock}>
            <span className={s.currentPrice}>
                {hasDiscount ? discont_price : price}
                <span>$</span>
            </span>
            {hasDiscount && (
                <>
                <span className={s.oldPrice}>{price}$</span>
                <span className={s.discount}>-{discountPercent}%</span>
                </>
            )}
        </div>
    )
}
