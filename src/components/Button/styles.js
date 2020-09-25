import styled from "styled-components";

export const ButtonComponent = styled.button`
  color: var(--color-full-white);
  background-color: var(--color-button);
  border-radius: 3px;
  border: none;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  text-transform: uppercase;

  width: 150px;
  height: 60px;

  justify-self: center;
  cursor: pointer;

  @media (min-width: 780px) {
    grid-area: button;
    color: var(--color-full-white);
    background-color: var(--color-button);
    border-radius: 3px;
    border: none;

    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    line-height: 26px;

    width: 404px;
    height: 60px;

    cursor: pointer;
  }
`;
