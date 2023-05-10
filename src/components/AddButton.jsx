import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { displayForm } from "../controllers/products/products.functions";
import { Button } from "@material-tailwind/react";
function AddButton() {
  return (
    <button
      className="absolute top-44 right-10 flex items-center justify-between rounded-lg bg-info p-3 shadow-low-info transition-all duration-300 ease-in-out hover:border-info hover:bg-white hover:text-info hover:shadow-high-info tablet:p-2 tablet:w-20 tablet:right-12"
      onClick={() => {
        displayForm("create-product-form");
      }}
    >
      <p className="hidden tablet:block">Add</p>
      <IoAddCircleOutline className="scale-150" />
    </button>
  );
}

export default AddButton;
