import styled from "styled-components";

export const FooterContent = styled.div`
  .footer-content {
    display: grid;
    margin-top: 60px;
    grid-template-areas:
      "instituition"
      "info"
      "about-us"
      "footer";
    border-top: 2px solid var(--color-footer-line);
  }

  #instituition {
    grid-area: instituition;
  }

  #info {
    grid-area: info;
  }
  #about-us {
    grid-area: about-us;
  }

  #instituition,
  #info,
  #about-us {
    color: var(--color-text-secundary);
    border-bottom: 1px solid var(--color-footer-line);
  }

  #instituition div,
  #info div,
  #about-us div {
    display: flex;
    justify-content: space-between;
  }

  #instituition img,
  #info img,
  #about-us img {
    cursor: pointer;
    padding-right: 15px;
  }

  #instituition h1,
  #info h1,
  #about-us h1 {
    font-weight: normal;
    font-size: 12px;
    line-height: 23px;
    text-transform: uppercase;
    text-indent: 15px;
  }

  #instituition p,
  #info p,
  #about-us p {
    display: none;
    color: black;
    font-size: 14px;
    line-height: 200%;
    display: flex;
    align-items: center;
    margin: 0 40px;
  }

  #instituition p,
  #info p,
  #about-us p {
    display: none;
  }

  p#Enable-info,
  p#Enable-About-us,
  p#Enable-showInstitutional {
    display: inherit;
    margin-left: 15px;
  }

  #media {
    margin: 0 auto;
    padding-top: 21px;
  }

  #media-links,
  #label,
  #send-mail h1 {
    display: flex;
    justify-content: center;
  }

  #media-links img {
    padding-left: 20px;
    cursor: pointer;
  }

  #label img {
    padding-top: 30px;
  }

  #send-mail h1 {
    color: var(--color-text-secundary);
    font-weight: normal;
    font-size: 16px;
    line-height: 163.42%;
    display: flex;
    text-transform: uppercase;
    margin-top: 31px;
  }

  #send-mail p {
    color: rgba(32, 32, 32, 0.5);
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    margin: 0 15px;
  }

  #send-mail input {
    border: none;
    border-bottom: 2px solid var(--color-footer-line);

    width: 200px;
    align-items: center;

    padding-bottom: 1px;
    margin-left: 15px;
  }

  #send-mail input:first-of-type {
    width: 290px;
    margin-bottom: 5px;
  }
  #send-mail input:last-of-type {
    margin-top: 15px;
    margin-right: auto;
  }

  #send-mail input:placeholder-shown {
    padding-bottom: 3px;
  }

  #send-mail button {
    background-color: var(--color-primary);
    border: none;
    border-radius: 3px;
    color: var(--color-full-white);

    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
    position: relative;

    left: 10px;
    bottom: 7px;
    width: 80px;
    height: 40px;

    margin-top: 10px;
    margin-bottom: 38px;
  }

  #footer-info {
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
  }

  #footer-info p {
    color: var(--color-full-white);
    text-align: left;
    align-self: center;
    margin: 20px 15px;
  }

  #footer-info img {
    display: flex;
    align-self: center;
    width: 94px;
    height: 21px;
    margin-bottom: 17px;
  }

  /* MOBILE ! ! ! ! ! ! ! !  */

  @media (min-width: 780px) {
    #instituition,
    #info,
    #about-us {
      grid-area: inherit;
      border-bottom: none;
    }

    #instituition p,
    #info p,
    #about-us p {
      display: inherit;
      margin: 0px;
    }

    .footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .footer-content {
      grid-template-areas: unset;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      justify-self: center;
      border-top: 2px solid var(--color-footer-line);
      margin: 0 auto;
      margin-top: 155px;
      max-width: 1280px;
    }

    #media {
      padding-top: 21px;
      margin-left: 30px;
    }

    #label img {
      padding-left: 32px;
      padding-top: 51px;
    }

    #instituition,
    #about-us {
      padding-left: 60px;
    }

    #info {
      padding-left: 30px;
    }

    #instituition,
    #info,
    #about-us {
      padding-top: 60px;
    }

    #instituition img,
    #info img,
    #about-us img {
      display: none;
    }

    #instituition h1,
    #info h1,
    #about-us h1 {
      font-size: 12px;
      font-weight: bold;
      margin: 0px;
      text-indent: 0px;
    }

    #instituition p,
    #info p,
    #about-us p {
      font-size: 14px;
      line-height: 200%;
      margin: 0px;
    }

    #mailing {
      position: relative;
      bottom: 128px;
      border: 2px solid var(--color-footer-line);
      width: 293px;
      height: 293px;
      border-radius: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      background-color: var(--color-full-white);
      margin-right: 30px;
      align-content: center;
    }

    #send-mail h1 {
      color: black;
      font-weight: bold;
      font-size: 16px;
      line-height: 163.42%;
      display: flex;
      text-transform: uppercase;
      position: absolute;
      bottom: 220px;
      left: 10px;
      padding: 0 7px;
      margin: 0px;
    }

    #send-mail h1,
    #send-mail p,
    #send-mail input {
      margin-left: 35px;
    }

    #send-mail p {
      color: var(--color-footer-line);
      font-size: 12px;
      line-height: 18px;
      display: flex;
      align-items: center;
    }

    #send-mail input {
      width: initial;
      border: none;
      border-bottom: 2px solid var(--color-footer-line);
      width: 216px;
    }

    #send-mail input:first-of-type {
      width: 216px;
      margin-bottom: 0px;
    }

    #send-mail input:last-of-type {
      margin-top: 30px;
    }

    #send-mail input:placeholder-shown {
      padding-bottom: 3px;
    }

    #send-mail button {
      background-color: var(--color-primary);
      border: none;
      border-radius: 3px;
      color: var(--color-full-white);

      font-family: "Open Sans";
      font-style: normal;
      font-weight: normal;
      text-transform: uppercase;
      margin: 0 auto;
      position: absolute;
      left: 0px;
      right: 10px;
      bottom: 30px;
      width: 110px;
      height: 50px;
      cursor: pointer;
    }

    #footer-info {
      background-color: var(--color-primary);
      display: flex;
      flex-direction: initial;
      height: 60px;
      max-width: 1280px;
      margin: 0 auto;
      align-self: center;
    }

    #footer-info p {
      text-align: center;
      align-self: center;
      color: var(--color-full-white);
      padding-left: 129px;
    }

    #footer-info img {
      padding-right: 92px;
      padding-left: 200px;
      margin: 0px;
      width: 111px;
      height: 25px;
    }
  }
`;
