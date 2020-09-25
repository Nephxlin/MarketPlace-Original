import React from "react";

import "./styles";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="895"
            title="Kit Slip On Conforto Feminino + Bolsa Flap - Marrom"
            price={149.9}
            image="https://static.zattini.com.br/produtos/kit-slip-on-conforto-feminino-bolsa-flap/38/OAG-0039-138/OAG-0039-138_zoom1.jpg?ts=1579522945&"
            rating={3}
          />

          <Product
            id="2311"
            title="Scarpin Griffe Salto Alto Tira - Bege"
            price={69.99}
            image="https://static.zattini.com.br/produtos/scarpin-griffe-salto-alto-tira/04/BAV-0118-004/BAV-0118-004_zoom2.jpg?ts=1600662765&"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="654535"
            title="Santa Lola"
            price={199}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTOsQOXVcQhclXLAcO7zoxlcWZ8dpoD7YcEaKp5Q_1lLtKHG7OIo3kmQl7CbICBwaGF_qb2h0BfxpzAzYGMIqJyRGxCah639n6LAdJveIf2efiHcPvOuRRuHw&usqp=CAE"
            rating={5}
          />
          <Product
            id="2344"
            title="Sandália Anabela Santa Lolla Espadrille "
            price={144.49}
            image="https://static.zattini.com.br/produtos/sandalia-anabela-santa-lolla-espadrille-amarracao-feminina/05/H08-4597-205/H08-4597-205_zoom1.jpg?ts=1599736260&"
            rating={3}
          />
          <Product
            id="3234"
            title="Scarpin Santa Lolla Boneca Suede Sepia Feminino"
            price={144.5}
            image="https://static.zattini.com.br/produtos/scarpin-santa-lolla-boneca-suede-sepia-feminino/04/H08-5780-004/H08-5780-004_zoom1.jpg?ts=1591364852&"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="432"
            title="Tamanco Santa Lolla Salto Bloco Em Rafia Suede"
            price={110.49}
            image="https://static.zattini.com.br/produtos/tamanco-santa-lolla-salto-bloco-em-rafia-suede/34/H08-5657-034/H08-5657-034_zoom1.jpg?ts=1590488031&"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
