import styled from "styled-components";

export const SizeBoxContent = styled.div`
  grid-area: size-box;

  #sizes-propertys {
    padding-top: 15px;
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    margin-bottom: 6px;
  }

  #sizes-propertys p:last-child {
    text-decoration-line: underline;
    justify-self: end;
    padding-right: 20px;
  }

  p,
  span {
    display: flex;
    align-items: center;
  }

  p,
  p:last-child {
    font-size: 14px;
    line-height: 26px;
  }

  p:last-child {
    color: var(--color-primary);
    text-decoration-line: underline;
    justify-self: end;
    padding-right: 20px;
    cursor: pointer;
  }

  span {
    color: var(--color-select-title);
    display: initial;
  }

  #sizes-box span.Enable {
    background-color: var(--color-primary);
    color: var(--color-full-white);
  }

  @media (min-width: 780px) {
    margin-left: 20px;
    margin-right: 58px;
    margin-bottom: 53px;

    #sizes-propertys {
      padding: 0;
      padding-top: 15px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 17px;
    }

    #sizes-propertys span:first-child {
      display: initial;
    }

    #sizes-propertys p:last-child {
      justify-self: end;
      padding-right: 0px;
    }

    span {
      display: initial;
      color: var(--color-select-title);
    }
  }
`;

export const SizeBoxValues = styled.div`
  display: flex;

  div {
    height: 28px;
    width: 28px;
    border: 1px solid #ebebeb;
    border-radius: 2px;

    display: flex;
    align-content: center;
    margin-right: 3px;
  }

  span {
    font-family: "Open Sans";
    font-size: 14px;
    line-height: 26px;
    margin: 0 auto;
  }

  div:last-child,
  div:nth-last-child(2) {
    display: none;
  }

  div.Enable {
    background-color: var(--color-primary);
  }

  div.Enable span {
    color: var(--color-full-white);
  }

  @media (min-width: 780px) {
    div:last-child,
    div:nth-last-child(2) {
      display: inherit;
    }

    div {
      max-height: 34px;
      max-width: 34px;
      border: 1px solid #ebebeb;
      border-radius: 2px;
      display: flex;
      align-content: center;
      cursor: pointer;
    }
  }
`;
