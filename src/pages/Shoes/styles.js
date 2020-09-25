import styled from "styled-components";

export const ShoesPage = styled.div`
  .home_image {
    display: none;
  }

  @media (min-width: 780px) {
    .home {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      max-width: 1280px;
    }

    .home_image {
      display: initial;
      width: 100%;
      height: 450px;
      z-index: -1;
      mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0)
      );
    }
  }
`;
