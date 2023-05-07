import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";

function MainPageTitle() {
  const { currentCategory } = useContext(Context);
  return (
    <div className="w-full p-10 tracking-tight font-semibold flex justify-center">
        <h1 className="w-60 text-4xl text-center">{currentCategory}</h1>
    </div>
  );
}

export default MainPageTitle;
