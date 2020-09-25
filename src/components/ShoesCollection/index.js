import React, { useState } from "react";

import { ShoesShowRoom } from "./styles";
import Product from "./Product";

import Fuscia from "../../assets/icons/elipse-color-fuscia.svg";
import Ocean from "../../assets/icons/elipse-color-ocean.svg";
import Brown from "../../assets/icons/elipse-color-brown.svg";
import Black from "../../assets/icons/elipse-color-black.svg";

export default function ShoesCollection() {
  const [colorOptions, setColorOptions] = useState([
    {
      color: Fuscia,
      name: "Fuscia",
    },
    {
      color: Ocean,
      name: "Ocean",
    },
    {
      color: Brown,
      name: "Brown",
    },
    {
      color: Black,
      name: "Black",
    },
  ]);

  return (
    <ShoesShowRoom>
      <Product
        id="895"
        category="Sapatos"
        title="Kit On Conforto, Bolsa Flap"
        price={149.9}
        image="https://static.zattini.com.br/produtos/kit-slip-on-conforto-feminino-bolsa-flap/38/OAG-0039-138/OAG-0039-138_zoom1.jpg?ts=1579522945&"
        sizes={[31, 32, 33, 34, 35, 36, 37, 38, 39]}
        description="loremloremloremlorem loremlorem lorem lorem"
        colors={[...colorOptions]}
      />

      <Product
        id="2311"
        category="Sapatos"
        title="Scarpin Griffe Salto Alto"
        price={69.99}
        image="https://static.zattini.com.br/produtos/scarpin-griffe-salto-alto-tira/04/BAV-0118-004/BAV-0118-004_zoom2.jpg?ts=1600662765&"
        rating={4}
        sizes={[31, 32, 33, 34, 35, 36, 37, 38, 39]}
        description="loremloremloremlorem loremlorem lorem lorem"
        colors={[colorOptions[0], colorOptions[1], colorOptions[3]]}
      />

      <Product
        id="654535"
        category="Sapatos"
        title="Santa Lola"
        price={199}
        image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTOsQOXVcQhclXLAcO7zoxlcWZ8dpoD7YcEaKp5Q_1lLtKHG7OIo3kmQl7CbICBwaGF_qb2h0BfxpzAzYGMIqJyRGxCah639n6LAdJveIf2efiHcPvOuRRuHw&usqp=CAE"
        sizes={[31, 32, 33, 34, 35, 36, 37, 38, 39]}
        description="loremloremloremlorem loremlorem lorem lorem"
        colors={[colorOptions[0], colorOptions[3]]}
      />

      <Product
        id="3234"
        category="Sapatos"
        title="Scarpin Santa Lolla"
        price={144.5}
        image="https://static.zattini.com.br/produtos/scarpin-santa-lolla-boneca-suede-sepia-feminino/04/H08-5780-004/H08-5780-004_zoom1.jpg?ts=1591364852&"
        sizes={[31, 32, 33, 34, 35, 36, 37, 38, 39]}
        description="loremloremloremlorem loremlorem lorem lorem"
        colors={[colorOptions[0]]}
      />
    </ShoesShowRoom>
  );
}
