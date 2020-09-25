import styled from "styled-components";

export const Main = styled.section`
  legend {
    display: none;
  }

  @media (min-width: 780px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1280px;

    legend {
      display: initial;
      color: var(--color-text-secundary);
      font-size: 11px;
      padding-top: 10px;
      margin: 0 40px;
    }
  }
`;

export const ShowRoom = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 780px) {
    padding-top: 11px;
    display: grid;
    grid-template-columns: 0.5fr 1.45fr 1.95fr;
    margin: 0 auto;
  }
`;
export const ProductForm = styled.div`
  display: grid;
  grid-template-areas:
    "color-details"
    "size-box"
    "description";
  margin: 0px 15px;
  margin-top: 20px;

  @media (min-width: 780px) {
    display: initial;
    position: inherit;
    border: 2px solid var(--color-main-details);
    border-radius: 3px;
    max-width: 444px;
    max-height: 533px;
    justify-self: center;
    margin: 0px;
  }
`;

export const Suggests = styled.div`
  margin-top: 30px;

  h1 {
    color: var(--color-primary);
    display: flex;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    text-transform: uppercase;
    justify-content: center;
    padding-bottom: 17px;
  }

  @media (min-width: 780px) {
    max-width: 1280px;
    margin: 0 auto;
    margin-top: 104px;

    h1 {
      color: var(--color-primary);
      display: flex;
      font-weight: normal;
      font-size: 20px;
      line-height: 26px;
      display: flex;
      text-transform: uppercase;
      justify-content: center;
      padding-bottom: 17px;
    }
  }
`;
