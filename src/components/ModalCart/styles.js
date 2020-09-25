import styled from "styled-components";

export const ModalCartContent = styled.div`
  z-index: 1;
  .modal-cart-content-disable {
    display: none;
  }

  #modal-cart {
    width: 100%;
    min-width: 320px;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
  }

  .modal-cart-content {
    position: fixed;
    margin: 0 auto;
    min-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    left: 0px;
    right: 0px;
    top: 0%;
    background: rgba(32, 32, 32, 0.6);
  }

  #cart-header {
    display: flex;
    flex-direction: inherit;
    margin: 0 30px;
    border-bottom: 1px solid var(--color-gray-light);
    align-content: center;
    margin-bottom: 0px;
  }

  #cart-header h1 {
    color: var(--color-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    padding-left: 10px;
  }

  #cart-header span {
    color: var(--color-text-secundary);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 29px;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

  #cart-header img {
    display: flex;
    align-self: flex-end;
    position: absolute;
    padding-top: 5px;
  }

  /* Products List */

  .products-container {
    height: 100%;
    overflow-y: scroll;
    margin: 20px;
  }

  .products-container::-webkit-scrollbar-track {
    background-color: #e2e2e2;
  }
  .products-container::-webkit-scrollbar {
    border-radius: 4px;
    width: 5px;
    background: var(--color-primary);
  }
  .products-container::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: var(--color-primary);
  }

  .cart-product {
    display: grid;
    grid-template-columns: 0.3fr 0.7fr 0.5fr 0.2fr;
    align-items: center;
    margin: 35px auto;
  }

  #cart-close-icon {
    cursor: pointer;
  }

  #product-title h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
  }

  #product-title strong {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
  }

  #product-image img {
    width: 46px;
    height: 59px;
    cursor: pointer;
  }

  #product-quantity {
    display: flex;
    align-items: center;
  }

  #product-quantity p {
    color: var(--color-select-title);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 10px;
  }

  #product-quantity img {
    width: 8px;
    cursor: pointer;
  }

  #product-alert-promo {
    background-color: var(--color-text-secundary);
    height: 50px;
    color: var(--color-full-white);
    font-size: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  #product-container-footer {
    background-color: var(--color-gray-light);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    margin-bottom: 10px;
  }

  #product-container-footer p {
    color: #202020;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
  }

  #product-container-footer span {
    font-size: 12px;
    line-height: 12px;
    display: flex;
    align-items: center;
  }

  Button {
    font-family: "Open Sans";
    font-size: 12px;
    line-height: 20px;
    text-transform: uppercase;
    width: 144px;
    height: 42px;
    justify-self: center;
    margin: 10px;
  }

  @media (min-width: 780px) {
    .modal-cart-content-disable {
      display: none;
    }

    .modal-cart-content {
      min-width: 100%;
      height: 100%;
      justify-content: flex-end;
    }

    #modal-cart {
      width: 525px;
      max-height: 816px;
      height: 100%;
    }

    /* Products List */

    .cart-product {
      margin: 25px auto;
    }

    #product-title h2 {
      font-size: 12px;
      line-height: 16px;
    }

    #product-title strong {
      font-size: 14px;
      line-height: 20px;
    }

    #product-quantity p {
      font-size: 14px;
      line-height: 17px;
      padding: 0 10px;
    }

    #product-quantity img {
      width: 8px;
      cursor: pointer;
    }

    #product-alert-promo {
      height: 50px;
      font-size: 14px;
      margin-top: 90px;
    }

    #product-container-footer {
      height: 80px;
      padding: 0 30px;
      margin-bottom: 0px;
    }

    #product-container-footer p {
      color: #202020;
      font-size: 16px;
      line-height: 23px;
    }

    #product-container-footer span {
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    }

    .modal-cart-content button {
      font-size: 12px;
      line-height: 20px;
      width: 235px;
      height: 42px;
    }
  }
`;
