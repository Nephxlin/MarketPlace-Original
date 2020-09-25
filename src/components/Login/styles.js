import styled from "styled-components";

export const LoginPage = styled.div`
  background-color: white;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .login_logo {
    object-fit: contain;
    width: 150px;
    margin: 20px auto;
  }

  .login_container {
    background-color: white;
    max-width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
    margin: 75px 20px;
  }

  .login_container > h1 {
    font-weight: 600;
    margin-bottom: 20px;
  }

  .login_container > form > h5 {
    margin-bottom: 5px;
  }

  input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
  }

  .login_container > p {
    margin-top: 15px;
    font-size: 12px;
  }

  .login_signInButton,
  .login_registerButton {
    width: 100%;
    height: 30px;
    background-color: var(--color-primary);
    border: none;
    border-radius: 3px;
    color: var(--color-full-white);

    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
  }

  .login_registerButton {
    margin-top: 25px;
    background-color: var(--color-button);
  }
`;
