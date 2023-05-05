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
      <Card className="fixed top-3 z-20 w-3/4">
        <form
          id="create-product-container"
          className=" flex w-full flex-wrap items-center justify-evenly p-4"
          onSubmit={(e) => {
            e.preventDefault();
            addData(data, setData);
            addProduct(data, setData, setProducts);
            displayForm("create-product-form");
            resetForm("create-product-container");
          }}
        >
          <Typography
            className=" w-full p-4 text-center text-info"
            variant="h4"
            color="blue-gray"
          >
            Add Product
          </Typography>
          <div className="flex h-52 w-4/5 flex-wrap items-center justify-center">
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
          <div className="mb-4 flex h-52 w-4/5 flex-wrap items-center justify-center">
            <Input id="description" label="Description" type="text" required />
            <Input
              id="ratings"
              label="Ratings"
              type="number"
              required
              min={0}
              max={10}
              className="w-full"
            />
            <select
              id="category"
              required
              label="Category"
              className="w-full rounded-md border border-neutral-400 text-neutral-500 bg-white p-2 text-sm"
            >
              <option value="Component">Component</option>
              <option value="Computer">Computer</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Tablet">Tablet</option>
              <option value="TV">TVs</option>
              <option value="Peripheral">Peripheral</option>
            </select>
            <Input id="type" label="Type" type="text" required />
          </div>

          <div className="flex w-full justify-center p-2">
            <input
              id="image"
              type="file"
              required
              accept="image/png, image/jpeg, image/jpg, image/webp"
              className="w-5/6"
            />
          </div>

          <div className="mt-5 flex w-full justify-evenly">
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
