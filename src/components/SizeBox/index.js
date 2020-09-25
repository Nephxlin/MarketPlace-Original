import React from "react";

import { SizeBoxContent, SizeBoxValues } from "./styles";

const SizeBox = (props) => {
  const { sizeTitle, sizeOptions, handleSetSize } = props;

  return (
    <SizeBoxContent>
      <div id="sizes-propertys">
        <p>
          Tamanho: <span>({sizeTitle})</span>
        </p>
        <p>Guia de medidas</p>
      </div>

      <SizeBoxValues>
        {sizeOptions.map((item, index) => {
          return (
            <div
              key={index}
              className={`${item.selected}`}
              onClick={() => handleSetSize(`${item.size}`, index)}
            >
              <span id="box">{item.size}</span>
            </div>
          );
        })}
      </SizeBoxValues>
    </SizeBoxContent>
  );
};

export default SizeBox;
