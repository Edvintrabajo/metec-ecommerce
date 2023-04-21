import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { displayForm } from "../controllers/products/products.functions";
import { Button } from "@material-tailwind/react";
function AddButton() {
  return (
    <button
      className="absolute top-28 right-10 flex w-20 items-center justify-between rounded-lg bg-info p-2 shadow-low-card transition-all duration-300 ease-in-out hover:border-info hover:bg-white hover:text-info hover:shadow-high-card"
      onClick={() => {
        displayForm("create-product-form");
      }}
    >
      <p>Add</p>
      <IoAddCircleOutline className="scale-125" />
    </button>
  );
}

export default AddButton;
