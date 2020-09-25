import React from "react";

import { ShoesPage } from "./styles";

import ShoesCollection from "../../components/ShoesCollection";

export default function Shoes() {
  return (
    <ShoesPage>
      <dir className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://image.freepik.com/free-photo/flat-lay-sport-shoes-pink-background-running-workout-fitness_4740-1202.jpg"
            alt=""
          />

          <div className="home_row">
            <ShoesCollection />
          </div>
        </div>
      </dir>
    </ShoesPage>
  );
}
