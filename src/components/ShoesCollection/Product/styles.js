import styled from "styled-components";

export const PhotoScroller = styled.div`
  display: flex;
  margin: 10px;
  padding: 20px;
  max-height: 400px;
  min-width: 100px;

  background-color: white;
  z-index: 0;

  @media (min-width: 780px) {
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;

    background-color: white;
    z-index: 0;
  }
`;

export const Photoloader = styled.div`
  h3 {
    color: var(--color-primary);
    display: flex;
    font-weight: normal;
    font-size: 12px;
    line-height: 26px;
    display: flex;
    text-transform: uppercase;
    justify-content: center;
    padding-bottom: 17px;
  }

  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
  }

  #color-options img {
    width: 5px;
    height: 10px;
  }

  Button {
    font-size: 12px;
    margin-top: 20px;
    height: 20px;
    width: 100%;
  }

  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
  }

  #product-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-top: 5px;
  }

  #product-info p {
    font-size: 16px;
    line-height: 23px;
  }

  #color-options {
    display: flex;
    justify-self: end;
  }

  #color-options img {
    width: 13px;
    padding-left: 3px;
    justify-self: end;
  }

  @media (min-width: 780px) {
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 100%;
    max-height: 400px;
    min-width: 100px;

    background-color: white;
    z-index: 0;

    Button {
      margin-top: 15px;
      height: 30px;
      width: 100%;
    }
  }
`;
