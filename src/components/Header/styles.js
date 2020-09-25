import styled from "styled-components";

export const HeaderContainer = styled.header`
  #logo {
    display: flex;
    padding-top: 16px;
    padding-bottom: 5px;
    padding-right: 10px;
    justify-content: center;
  }

  #logo img {
    width: 110px;
    height: 25px;
  }

  @media (min-width: 780px) {
    margin: 0 auto;

    #logo {
      display: flex;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    #logo img {
      padding-left: 134px;
      margin: 0 auto;
      width: 148px;
      height: 34px;
    }
  }
`;

export const NavBar = styled.nav`
  .left-item-top-bar img {
    position: absolute;
    left: 17px;
    right: 62px;
    top: 21px;
    bottom: 17px;
  }

  .left-item-top-bar a,
  .mid-item-top-bar,
  .search-top-bar input {
    display: none;
  }

  .search-top-bar {
    position: absolute;
    right: 59px;
    top: 19px;
    bottom: 18px;
    height: 0px;
  }

  .shopping-bag-top-bar {
    position: absolute;
    right: 16px;
    top: 16px;
    bottom: 18px;
    height: 0px;
  }

  .shopping-bag-top-bar span {
    position: absolute;
    right: 11px;
    top: 11px;
  }

  @media (min-width: 780px) {
    border: 1px solid var(--color-header-border);
    color: var(--color-gray-details);
    height: 50px;
    display: grid;
    grid-template-columns: 0.7fr 0.9fr 0.45fr 0.1fr;
    align-content: center;
    max-width: 1280px;
    margin: 0 auto;

    .left-item-top-bar,
    .mid-item-top-bar,
    .mid-content,
    .search-top-bar,
    .shopping-bag-top-bar,
    .shopping-bag-top-bar span {
      position: initial;
      align-items: center;
      height: initial;
    }

    .left-item-top-bar,
    .left-item-top-bar a,
    .mid-item-top-bar,
    #mid-content,
    .search-top-bar,
    .shopping-bag-top-bar,
    .shopping-bag-top-bar span {
      display: flex;
    }

    .left-item-top-bar img {
      display: none;
    }

    .left-item-top-bar,
    .left-item-top-bar a {
      color: inherit;
      font-size: 12px;
      line-height: 18px;
    }

    .left-item-top-bar a {
      padding-left: 40px;
      cursor: pointer;
    }

    #mid-content {
      justify-self: center;
    }

    #mid-content a {
      font-size: 14px;
      line-height: 20px;
      text-transform: uppercase;
      margin-left: 20px;
      margin-right: 45px;
      justify-self: center;
      cursor: pointer;
    }

    .search-top-bar {
      border-bottom: 2px solid rgba(104, 104, 104, 0.4);
      width: 78px;
      padding: 7px;
      justify-self: end;
      align-content: center;
      box-sizing: border-box;
    }

    .search-top-bar img {
      padding-right: 7px;
    }

    .search-top-bar input {
      display: initial;
      color: var(--color-gray-details);
      border: none;
      width: 41px;
    }

    .shopping-bag-top-bar {
      padding-left: 20px;
      padding-right: 40px;
      align-items: center;
      cursor: pointer;
    }

    .shopping-bag-top-bar span {
      padding-top: 8px;
    }
  }
`;
