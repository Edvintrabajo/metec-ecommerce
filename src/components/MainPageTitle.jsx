import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";

function MainPageTitle() {
  const { currentCategory } = useContext(Context);
  return (
    <div className="p-10 text-4xl text-center tracking-tight font-semibold">
      <h1 className="">{currentCategory}</h1>
    </div>
  );
}

export default MainPageTitle;
