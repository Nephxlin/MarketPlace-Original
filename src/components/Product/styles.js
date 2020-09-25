import styled from "styled-components";

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;

  background-color: white;
  z-index: 0;
  text-align: center;

  .product_rating {
    display: flex;
  }

  > img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  > button {
    height: 30px;
    width: 100%;
    text-transform: uppercase;
    background: var(--color-button);
    border: 1px solid;
    border-radius: 4px;
    margin-top: 10px;
    color: #ffffff;
  }

  .product_price {
    margin-top: 5px;
  }

  .product_info {
    height: 100px;
    margin-bottom: 15px;
  }

  .product_info p {
    font-weight: bold;
  }
`;
