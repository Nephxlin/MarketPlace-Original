import styled from "styled-components";

export const ProductHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-areas: "price button";
  align-content: center;
  align-items: center;
  margin-top: 34px;

  h1,
  span {
    display: none;
  }

  strong {
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    color: var(--color-gray-details);
    text-decoration-line: none;
  }

  #price {
    grid-area: price;
    align-items: center;
    align-content: center;
  }

  p:first-child {
    color: #e35442;
    text-decoration-line: line-through;
  }

  p:last-child {
    font-size: 12px;
    line-height: 18px;
    color: var(--color-gray-dark);
  }

  Button {
    grid-area: button;
  }

  @media (min-width: 780px) {
    display: inherit;
    margin: 0 20px;
    margin-top: 20px;

    span,
    p {
      font-size: 14px;
      line-height: 26px;
    }

    h1,
    span,
    p,
    p:last-child {
      display: flex;
      align-items: center;
    }

    h1 {
      display: initial;
      font-weight: bold;
      font-size: 20px;
      line-height: 100%;
      text-transform: uppercase;
    }
    strong {
      font-size: 20px;
    }

    #price {
      display: flex;
      padding-top: 10px;
      padding-bottom: 60px;
    }

    #price p:last-child {
      position: absolute;
      padding-top: 40px;
    }

    Button {
      display: none;
    }
  }
`;
