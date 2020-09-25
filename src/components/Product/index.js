import React, { useState } from "react";

import { ProductItem } from "./styles";
import { useStateValue } from "../../provider/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [basket, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <ProductItem>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>R$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="" />

      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>

      <button onClick={addToBasket}>Add To Basket</button>
    </ProductItem>
  );
}

export default Product;
