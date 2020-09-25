import React, { useState } from "react";

import Button from "../../components/Button";

import closeIcon from "../../assets/icons/close.svg";

import { ModalAddContent } from "./styles";

const ModalAdd = (props) => {
  const {
    selectedProduct,
    openClosedModal,
    openModalCart,
    modalStatus,
  } = props;

  return (
    <ModalAddContent>
      <div className={modalStatus}>
        <div id="modal-add-content">
          <img
            id="close-icon"
            src={closeIcon}
            alt="Close-icon"
            onClick={() => openClosedModal("modal-add-card-disable")}
          />
          <img id="product-photo" src={selectedProduct} alt="Sandals" />
          <h1>Produto adicionado com sucesso!</h1>
          <Button
            Title={"Finalizar compra"}
            clickFunction={() => openModalCart("modal-cart-content")}
          />
          <span onClick={() => openClosedModal("modal-add-card-disable")}>
            Continuar Comprando
          </span>
        </div>
      </div>
    </ModalAddContent>
  );
};

export default ModalAdd;
