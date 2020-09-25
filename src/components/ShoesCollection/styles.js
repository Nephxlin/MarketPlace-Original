import styled from "styled-components";

export const ShoesShowRoom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;

  @media (min-width: 780px) {
    display: flex;
    z-index: 1;
    margin: 0 5px;
  }
`;
