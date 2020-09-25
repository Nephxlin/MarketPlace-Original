import React from "react";

import { ColorPicker } from "./styles";

const ColorSelect = (props) => {
  const { colorName, colorOptions, handleSetColor } = props;

  return (
    <ColorPicker className="details-color">
      <p>
        Cor: <span>({colorName})</span>
      </p>
      <div>
        {colorOptions.map((color, index) => {
          return (
            <img
              id={color.selected}
              key={index}
              src={color.cor}
              alt={color.name}
              onClick={() => handleSetColor(`${color.name}`, index)}
            />
          );
        })}
      </div>
    </ColorPicker>
  );
};

export default ColorSelect;
