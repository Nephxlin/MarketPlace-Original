import React, { useState } from "react";

import LeftNavBar from "../../components/LeftNavBar";
import ProductPhoto from "../../components/ProductPhoto";
import ProductDescription from "../../components/ProductDescription";
import ProductInfo from "../../components/ProductInfo";

import ShoesCollection from "../../components/ShoesCollection";

import ColorSelect from "../../components/ColorSelect";
import SizeBox from "../../components/SizeBox";
import ModalAdd from "../../components/ModalAdd";
import ModalCart from "../../components/ModalCart";

import { Main, ShowRoom, ProductForm, Suggests } from "./styles";

import { useStateValue } from "../../provider/StateProvider";

function Index() {
  const [{ preview }, dispatch] = useStateValue();

  const [colorName, setColorName] = useState("Selecionar Cor");

  const [colorOptions, setColorOptions] = useState(
    preview.colors.map((item) => {
      return (item = {
        cor: item.color,
        name: `${item.name}`,
        selected: "Disable",
      });
    })
  );

  function handleSelectColor(props, index) {
    for (let item in colorOptions) {
      colorOptions[item].selected = "Disable";
    }
    if (colorOptions[index].name === props) {
      return (colorOptions[index].selected = "Enable");
    }
  }

  function handleSetColor(props, index) {
    setColorName(props);
    handleSelectColor(props, index);
  }

  //Get Size
  const [sizeTitle, setSizeTitle] = useState("Tamanho");

  const [sizeOptions, setSizeOptions] = useState(
    preview.sizes.map((item) => {
      return (item = {
        size: `${item}`,
        selected: "Disable",
      });
    })
  );

  function handleSelectSize(props, index) {
    for (let item in sizeOptions) {
      sizeOptions[item].selected = "Disable";
    }
    if (sizeOptions[index].size === props) {
      return (sizeOptions[index].selected = "Enable");
    }
  }

  function handleSetSize(props, index) {
    setSizeTitle(props);
    handleSelectSize(props, index);
  }

  //Open / Close Modal
  const [modal, setModal] = useState("modal-add-card-disable");

  function handleModal(props) {
    setModal(props);
  }

  //Open / Close Cart item
  const [modalCart, setModalCart] = useState("modal-cart-content-disable");

  function handleModalCart(props) {
    setModalCart(props);
    setModal("modal-add-card-disable");
  }

  return (
    <>
      <Main>
        <legend>
          <p>
            Home / <strong>{preview.category}</strong>
          </p>
        </legend>
        <ShowRoom>
          <LeftNavBar SelectedProduct={preview.image} />

          <ProductPhoto SelectedProduct={preview.image} />

          <ProductForm>
            <ProductDescription
              openClosedModal={handleModal}
              title={preview.title}
              price={preview.price}
              id={preview.id}
            />

            <ColorSelect
              colorName={colorName}
              colorOptions={colorOptions}
              handleSetColor={handleSetColor}
            />

            <SizeBox
              sizeTitle={sizeTitle}
              sizeOptions={sizeOptions}
              //Change Size State
              handleSetSize={handleSetSize}
            />

            <ProductInfo
              description={preview.description}
              openClosedModal={handleModal}
            />
          </ProductForm>
        </ShowRoom>
      </Main>

      <Suggests>
        <h1>Quem viu, viu também</h1>
        <ShoesCollection />
      </Suggests>

      <ModalAdd
        modalStatus={modal}
        selectedProduct={preview.image}
        openClosedModal={handleModal}
        openModalCart={handleModalCart}
      />

      <ModalCart modalStatus={modalCart} openModalCart={handleModalCart} />
    </>
  );
}

export default Index;
