import React from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import search from "../../assets/icons/search.svg";
import shoppingBag from "../../assets/icons/shopping-bag.svg";
import menuMobile from "../../assets/icons/menu-mobile.svg";

import { HeaderContainer, NavBar } from "./styles";
import { useStateValue } from "../../provider/StateProvider";

function Header(props) {
  const { openModalCart } = props;

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <HeaderContainer className="Header">
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="logotype" />
        </Link>
      </div>

      <NavBar className="top-bar">
        <div onClick={handleAuth} className="left-item-top-bar">
          <img src={menuMobile} alt="Menu" />
          <Link to={!user && "/login"}>
            {!user ? <a>Entrar | Cadastrar-se</a> : <a> Sair | {user.email}</a>}
          </Link>
        </div>

        <div className="mid-item-top-bar">
          <div id="mid-content">
            <div>
              <Link to="/shoes">
                <a>SAPATOS</a>
              </Link>
            </div>
            <div>
              <a>BOLSAS</a>
            </div>

            <div>
              <a>ACESSÓRIOS</a>
            </div>

            <div>
              <Link to="/orders">
                <a>OFF</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="search-top-bar">
          <img src={search} alt="search" />
          <input type="text" placeholder="Buscar" />
        </div>
        <div className="shopping-bag-top-bar">
          <img
            onClick={() => openModalCart("modal-cart-content")}
            src={shoppingBag}
            alt="shopping bag"
          />
          <span>{basket.length}</span>
        </div>
      </NavBar>
    </HeaderContainer>
  );
}

export default Header;
