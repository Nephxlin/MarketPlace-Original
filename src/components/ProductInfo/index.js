import React from "react";

import Button from "../../components/Button";

import { ProductInfoComponent } from "./styles";

const ProductInfo = (props) => {
  const { openClosedModal, description } = props;

  return (
    <ProductInfoComponent>
      <Button
        clickFunction={() => openClosedModal("modal-add-card")}
        Title={`Adicionar à sacola`}
      />

      <h3>Descrição</h3>
      <p>{description}</p>
    </ProductInfoComponent>
  );
};

export default ProductInfo;
