import React from "react";
import { useHistory } from "react-router-dom";

import { PhotoScroller, Photoloader } from "./styles";
import { useStateValue } from "../../../provider/StateProvider";

import Button from "../../Button";

function Product2({
  id,
  category,
  title,
  image,
  price,
  colors,
  sizes,
  description,
}) {
  const [preview, dispatch] = useStateValue();

  const history = useHistory();

  const addToBasket = () => {
    // dispatch item to data layer
    dispatch({
      type: "ADD_TO_PREVIEW",
      item: {
        id: id,
        category: category,
        title: title,
        image: image,
        price: price,
        colors: colors,
        sizes: sizes,
        description: description,
      },
    });
    console.log(preview);
    history.replace("/preview");
  };

  return (
    <PhotoScroller>
      <Photoloader>
        <h3>{title}</h3>
        <div>
          <img src={image} alt={image} />

          <div id="product-info">
            <p className="product_price">
              <small>R$</small>
              <strong>{price}</strong>
            </p>

            <div id="color-options">
              {colors.map((color, index) => {
                return <img src={color.color} alt={color.name} />;
              })}
            </div>
          </div>
        </div>
        <Button clickFunction={addToBasket} Title={`Ver detalhes`} />
      </Photoloader>
    </PhotoScroller>
  );
}

export default Product2;
