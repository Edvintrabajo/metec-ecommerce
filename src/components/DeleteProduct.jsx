import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import {
  displayForm,
  deleteProduct,
} from "../controllers/products/products.functions";
import { Card, Typography } from "@material-tailwind/react";

function DeleteProduct() {
  const { productIdEdit, setProducts, setCurrentTenProducts } = useContext(Context);

  return (
    <div
      id="delete-product-form"
      className="absolute top-0 left-0 z-10 hidden h-full w-full items-center justify-center bg-b-rgba-4"
    >
      <Card
        id="delete-product-container"
        className="fixed top-64 z-20 flex w-80 items-center justify-center border-2 bg-white p-4 text-center shadow-high-danger tablet:w-96 tablet:h-52 laptop:w-1/3"
        color="transparent"
        shadow={false}
      >
        <Typography className="text-danger" variant="h4" color="blue-gray">
          Delete Product
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          If you delete this product, you will not be able to recover it. Are
          you sure you want to delete this product?
        </Typography>
        <div className="mt-4 flex w-full justify-evenly">
          <button
            className="w-20 rounded-md border-2 border-danger bg-danger p-1 text-white shadow-low-danger transition-all hover:bg-white hover:text-danger hover:shadow-high-danger"
            onClick={() => {
              deleteProduct(productIdEdit, setProducts, setCurrentTenProducts);
              displayForm("delete-product-form");
            }}
          >
            Delete
          </button>
          <button
            className="w-20 rounded-md border-2 border-cancel bg-cancel p-1 text-white shadow-low-cancel transition-all hover:bg-white hover:text-cancel hover:shadow-high-cancel"
            type="button"
            onClick={() => {
              displayForm("delete-product-form");
            }}
          >
            Cancel
          </button>
        </div>
      </Card>
    </div>
  );
}

export default DeleteProduct;
