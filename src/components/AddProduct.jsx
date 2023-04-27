import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import {
  displayForm,
  addProduct,
  addData,
  resetForm,
} from "../controllers/products/products.functions";
import { Card, Typography, Input } from "@material-tailwind/react";

function AddProduct() {
  const { setProducts, data, setData } = useContext(Context);

  return (
    <div
      id="create-product-form"
      className="absolute top-0 left-0 z-10 hidden h-full w-full items-center justify-center bg-b-rgba-4"
    >
      <Card className="w-2/3">
        <form
          id="create-product-container"
          className="z-20 flex w-full flex-wrap items-center justify-evenly p-4"
          onSubmit={(e) => {
            e.preventDefault();
            addData(data, setData);
            addProduct(data, setData, setProducts);
            displayForm("create-product-form");
            resetForm("create-product-container");
          }}
        >
          <Typography
            className=" w-full p-4 text-info"
            variant="h4"
            color="blue-gray"
          >
            Add Product
          </Typography>
          <div className="mb-4 flex h-52 w-2/5 flex-wrap items-center justify-center">
            <Input id="name" label="Name" type="text" required />
            <Input id="brand" label="Brand" type="text" required />
            <Input
              id="price"
              label="Price"
              type="number"
              required
              min={0}
              max={10000}
            />
            <Input
              id="stock"
              label="Stock"
              type="number"
              required
              min={0}
              max={10000}
            />
          </div>
          <div className="mb-4 flex h-52 w-2/5 flex-wrap items-center justify-center">
            <Input id="description" label="Description" type="text" required />
            <Input
              id="ratings"
              label="Ratings"
              type="number"
              required
              min={0}
              max={10}
            />
            <Input id="category" label="Category" type="text" required />
            <Input id="type" label="Type" type="text" required />
          </div>

          <div className=" w-4/6">
            <input
              id="image"
              type="file"
              required
              accept="image/png, image/jpeg, image/jpg"
            />
          </div>

          <div className="mt-4 flex w-1/2 justify-evenly">
            <button
              className="w-20 rounded-md border-2 border-info bg-info p-1 text-white shadow-low-info transition-all hover:bg-white hover:text-info hover:shadow-high-info"
              type="submit"
            >
              Add
            </button>

            <button
              className="w-20 rounded-md border-2 border-cancel bg-cancel p-1 text-white shadow-low-cancel transition-all hover:bg-white hover:text-cancel hover:shadow-high-cancel"
              type="button"
              onClick={() => {
                displayForm("create-product-form");
                resetForm("create-product-container");
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AddProduct;
