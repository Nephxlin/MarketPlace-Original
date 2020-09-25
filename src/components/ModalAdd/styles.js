import styled from "styled-components";

export const ModalAddContent = styled.div`
  .modal-add-card-disable {
    display: none;
  }

  .modal-add-card {
    display: inherit;
    position: fixed;
    top: 0px;
    background: rgba(32, 32, 32, 0.6);
    width: 100%;
    height: 100%;
  }

  #modal-add-content {
    min-width: 290px;
    min-height: 430px;
    background-color: white;
    margin: 0 15px;
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }

  #close-icon {
    align-self: flex-end;
    margin-top: 16px;
    margin-right: 19px;
  }

  #product-photo {
    width: 65%;
    height: 50%;
    align-self: center;
    margin-top: 28px;
    margin-bottom: 11px;
  }

  h1 {
    color: var(--color-primary);
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;

    width: 200px;

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    justify-items: center;
    margin: 0 40px;
    margin-top: 11px;
  }

  Button {
    width: 65%;
    align-self: center;
    font-size: 12px;
    margin: 0;
    margin-top: 9px;
  }

  span {
    color: var(--color-footer-line);
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    text-decoration-line: underline;
    display: flex;
    align-self: center;
    justify-self: center;
    margin: 10px 70px;
    cursor: pointer;
  }

  @media (min-width: 780px) {
    .modal-add-card-disable {
      display: none;
    }

    .modal-add-card {
      display: inherit;
      width: 100%;
      height: 100%;
    }

    #modal-add-content {
      width: 445px;
      height: 602px;
      margin: 0 auto;
      margin-top: 62px;
    }

    #product-photo {
      margin: 0 70px;
      margin-top: 15px;
      margin-bottom: 11px;
      width: 305px;
      height: 358px;
    }

    h1 {
      width: initial;
      font-size: 22px;
      line-height: 22px;
      position: initial;
      display: flex;
      margin: 0 70px;
      margin-top: 11px;
    }

    Button {
      font-size: 14px;
      width: 305px;
    }

    span {
      color: var(--color-footer-line);
      font-size: 14px;
      margin: 0 70px;
      margin-top: 10px;
      cursor: pointer;
    }
  }
`;
