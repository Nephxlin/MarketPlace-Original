import styled from "styled-components";

export const ProductInfoComponent = styled.div`
  h3 {
    color: var(--color-primary);
    padding-top: 20px;
    font-size: 14px;
    line-height: 26px;
  }

  p {
    font-size: 13px;
  }

  Button {
    display: none;
  }

  @media (min-width: 780px) {
    padding: 0;

    h3 {
      display: none;
    }

    p {
      padding: 0;
      padding: 25px 0;
      font-size: 14px;
      line-height: 200%;
      margin: 0 20px;
    }

    Button {
      display: initial;
      margin: 0 15px;
    }
  }
`;
