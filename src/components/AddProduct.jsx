import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { addProduct, resetForm } from "../controllers/products/products.functions";
import { Card, Typography, Input } from "@material-tailwind/react";

function AddProduct({handleOpen}) {
  const { setProducts, setCurrentTenProducts, setCurrentPage, currentCategory } = useContext(Context);

  return (
      <Card>
        <form
          id="create-product-container"
          className="flex w-full flex-wrap items-center justify-evenly p-4"
          onSubmit={(e) => {
            e.preventDefault();
            addProduct(setProducts, setCurrentTenProducts, currentCategory);
            resetForm("create-product-container");
            setCurrentPage(1)
            handleOpen();
          }}
        >
          <Typography
            className=" w-full p-4 text-center text-info"
            variant="h4"
            color="blue-gray"
          >
            Add Product
          </Typography>
          <div className="flex h-52 w-4/5 flex-wrap items-center justify-center laptop:w-2/5">
            <Input id="Name" label="Name" type="text" required />
            <Input id="Brand" label="Brand" type="text" required />
            <Input id="Price" label="Price" type="number" required min={0} max={10000} />
            <Input id="Stock" label="Stock" type="number" required min={0} max={10000} />
          </div>
          <div className="mb-4 flex h-52 w-4/5 flex-wrap items-center justify-center laptop:w-2/5 tablet:mb-0">
            <Input id="Description" label="Description" type="text" required />
            <Input id="Ratings" label="Ratings" type="number" required min={0} max={10} className="w-full" />
            
            <select id="Category" required label="Category" className="w-full rounded-md border border-neutral-400 text-neutral-500 bg-white p-2 text-sm">
              <option value="Component">Component</option>
              <option value="Computer">Computer</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Tablet">Tablet</option>
              <option value="TV">TVs</option>
              <option value="Peripheral">Peripheral</option>
            </select>
            
            <Input id="Type" label="Type" type="text" required />
          </div>

          <div className="flex w-full justify-center p-2">
            <input id="Image" type="file" required accept="image/webp" className="w-5/6 tablet:w-2/3 laptop:w-1/2" />
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
                handleOpen()
                resetForm("create-product-container");
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </Card>
    
  );
}

export default AddProduct;
