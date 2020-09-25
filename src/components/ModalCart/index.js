import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";

import closeIcon from "../../assets/icons/close.svg";
import subtract from "../../assets/icons/subtract.svg";
import removeIcon from "../../assets/icons/mini-close.svg";
import plus from "../../assets/icons/plus.svg";

import { ModalCartContent } from "./styles";
import { useStateValue } from "../../provider/StateProvider";

const ModalCart = (props) => {
  const {
    cardItems,
    openModalCart,
    modalStatus,
    id,
    title,
    image,
    price,
    rating,
  } = props;

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <ModalCartContent>
      <div className={modalStatus}>
        <div id="modal-cart">
          <div id="cart-header">
            <img
              id="cart-close-icon"
              src={closeIcon}
              alt="Close-icon"
              onClick={() => openModalCart("modal-cart-content-disable")}
            />
            <h1>sacola</h1>
            <span>{basket.length} Itens</span>
          </div>

          <div className="products-container">
            {/* {cardItems.map((item, index) => {
              return (
                <div key={index} className="cart-product">
                  <div id="product-image">
                    <img src={item.img} alt="sandals" />
                  </div>
                  <div id="product-title">
                    <h2>{item.title}</h2>
                    <strong>{item.price}</strong>
                  </div>
                  <div id="product-quantity">
                    <img src={subtract} alt="subtract" />
                    <p>{item.quantity}</p>
                    <img src={plus} alt="Plus" />
                  </div>
                  <img src={removeIcon} alt="Remove Icon" />
                </div>
              );
            })} */}
          </div>
          <div id="product-alert-promo">
            <p>
              Faltam R$ xx,xx para você<strong>Ganhar Frete Grátis</strong>
            </p>
          </div>
          <div id="product-container-footer">
            <div id="product-value">
              <p>Total: R$ 149,00</p>
              <span>até 3x de R$ 49,90 sem juros</span>
            </div>

            <Link to="/payment">
              <Button
                Title={"Finalizar compra"}
                clickFunction={() =>
                  openModalCart("modal-cart-content-disable")
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </ModalCartContent>
  );
};

export default ModalCart;
