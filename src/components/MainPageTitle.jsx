import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import AddButton from "./AddButton";
import Filters from "./Filters";

function MainPageTitle() {
  const { currentCategory, isAuthtorized } = useContext(Context);
  return (
    <div className="w-full p-10 tracking-tight font-semibold flex justify-center">
        
        <div className="w-1/5"> 
          <Filters />
        </div>
        
        <div className="w-3/5 flex justify-center"> 
          <h1 className="w-60 text-3xl tablet:text-4xl text-center">{currentCategory}</h1>
        </div>
        
        <div className="w-1/5 flex justify-end"> 
          {isAuthtorized ? <AddButton /> : <></>}
        </div>

    </div>
  );
}

export default MainPageTitle;
