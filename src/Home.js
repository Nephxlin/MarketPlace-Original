import React from "react";

import "./Home.css";

import Shoes from "./pages/Shoes";

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <Shoes />
      </div>
    </div>
  );
}
