import React from "react";

import { ProductHeader } from "./styles";

import Button from "../../components/Button";

const ProductDescription = (props) => {
  const { openClosedModal, price, title, id } = props;

  return (
    <ProductHeader>
      <h1>{title}</h1>
      <span>
        RT {id} | 03.07.{id}
      </span>
      <div id="price">
        <p>{`R$ ${price + 30}`} |</p>
        <strong>{`R$ ${price}`}</strong>
        <p>{`Ou 6x de R$ ${(price / 6).toFixed(2)}`}</p>
      </div>
      <Button
        clickFunction={() => openClosedModal("modal-add-card")}
        Title={`Adicionar à sacola`}
      />
    </ProductHeader>
  );
};

export default ProductDescription;
