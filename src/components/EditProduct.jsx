import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { updateProduct, resetForm } from "../controllers/products/products.functions";
import { Card, Typography, Input } from "@material-tailwind/react";
import { setCurrentProductValues } from "../controllers/products/products.functions";

function EditProduct({handleOpen, product}) {
  const { setProducts, setCurrentTenProducts, setCurrentPage, currentCategory } = useContext(Context);

  useEffect(() => {
    setCurrentProductValues(product);
  }, []);

  return (
      <Card>
        <form
          id="edit-product-container"
          className="flex w-full flex-wrap items-center justify-evenly p-4"
          onSubmit={(e) => {
            e.preventDefault();
            updateProduct(product, setProducts, setCurrentTenProducts, currentCategory );
            setCurrentPage(1);
            handleOpen();
          }}
        >
          <Typography className=" w-full p-4 text-center text-edit" variant="h4" color="blue-gray" >
            Edit Product
          </Typography>

          <div className="flex h-52 w-4/5 flex-wrap items-center justify-center tablet:w-2/5">
            <Input id="editName" type="text" label="Name" required />
            <Input id="editBrand" type="text" label="Brand" required />
            <Input id="editPrice" type="number" label="Price" required min={0} max={10000} />
            <Input id="editStock" type="number" label="Stock" required min={0} max={10000} />
          </div>

          <div className="mb-4 flex h-52 w-4/5 flex-wrap items-center justify-center tablet:mb-0 tablet:w-2/5">
            <Input id="editDescription" type="text" label="Description" required />
            <Input id="editRatings" type="number" label="Ratings" required min={0} max={10} />
            
            <select id="editCategory" required className="w-full rounded-md border border-neutral-400 bg-white p-2 text-sm text-neutral-500">
              <option value="Component">Component</option>
              <option value="Computer">Computer</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Tablet">Tablet</option>
              <option value="TV">TVs</option>
              <option value="Peripheral">Peripheral</option>
            </select>

            <Input id="editType" type="text" label="Type" required />
          </div>

          <div className="flex w-full justify-center p-2">
            <input id="editImage" type="file" accept="image/webp" className="w-5/6 tablet:w-2/3 laptop:w-1/2" />
          </div>

          <div className="mt-5 flex w-full justify-evenly">
            <button
              className="w-20 rounded-md border-2 border-edit bg-edit p-1 text-white shadow-low-edit transition-all hover:bg-white hover:text-edit hover:shadow-high-edit"
              type="submit"
            >
              Edit
            </button>

            <button
              className="w-20 rounded-md border-2 border-cancel bg-cancel p-1 text-white shadow-low-cancel transition-all hover:bg-white hover:text-cancel hover:shadow-high-cancel"
              type="button"
              onClick={() => {
                handleOpen();
                resetForm("edit-product-container");
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </Card>
  );
}

export default EditProduct;
