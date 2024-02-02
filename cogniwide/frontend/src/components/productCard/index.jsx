import React from "react";
import style from "./productCard.module.css";

const ProductCard = ({ data = {}, currency }) => {
  return (
    <>
      <div className={style.card}>
        <div>
          <img src={data.productImage} className={style.card_img} />
        </div>
        <div className={style.card_body}>
          <h5 className={style.card_title}>{data.productModel}</h5>
          <span className={style.product_brand}>
            Brand : {data.productName}
          </span>
          <span className={style.product_rating}>
            Rating : {data.productRating}
          </span>
          <span className={style.product_price}>
            {data[currency]} {currency}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
