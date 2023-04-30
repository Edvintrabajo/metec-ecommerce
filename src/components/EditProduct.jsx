import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import {
  displayForm,
  updateProduct,
  addDataEdit,
  resetForm,
} from "../controllers/products/products.functions";
import { Card, Typography, Input } from "@material-tailwind/react";

function EditProduct() {
  const { productIdEdit, setProducts, data, setData, imageRefName } =
    useContext(Context);

  return (
    <div
      id="edit-product-form"
      className="absolute top-0 left-0 z-10 hidden h-full w-full items-center justify-center bg-b-rgba-4"
    >
      <Card className="w-2/3">
        <form
          id="edit-product-container"
          className="z-20 flex w-full flex-wrap items-center justify-evenly p-4"
          onSubmit={(e) => {
            e.preventDefault();
            addDataEdit(data, setData);
            updateProduct(
              productIdEdit,
              setProducts,
              data,
              setData,
              imageRefName
            );
            displayForm("edit-product-form");
            resetForm("edit-product-container");
          }}
        >
          <Typography
            className=" w-full p-4 text-edit"
            variant="h4"
            color="blue-gray"
          >
            Edit Product
          </Typography>
          <div className="mb-4 flex h-72 w-2/5 flex-wrap items-center justify-center">
            <label htmlFor="">Name</label>
            <Input id="editName" name="editName" type="text" required />
            <label htmlFor="">Brand</label>
            <Input id="editBrand" name="editBrand" type="text" required />
            <label htmlFor="">Price</label>
            <Input
              id="editPrice"
              name="editPrice"
              type="number"
              required
              min={0}
              max={10000}
            />
            <label htmlFor="">Stock</label>
            <Input
              id="editStock"
              name="editStock"
              type="number"
              required
              min={0}
              max={10000}
            />
          </div>
          <div className="mb-4 flex h-72 w-2/5 flex-wrap items-center justify-center">
            <label htmlFor="">Description</label>
            <Input
              id="editDescription"
              name="editDescription"
              type="text"
              required
            />
            <label htmlFor="">Ratings</label>
            <Input
              id="editRatings"
              name="editRatings"
              type="number"
              required
              min={0}
              max={10}
            />
            <label htmlFor="">Category</label>
            <Input id="editCategory" name="editCategory" type="text" required />
            <label htmlFor="">Type</label>
            <Input id="editType" name="editType" type="text" required />
          </div>
          <div className=" w-4/6">
            <input
              id="editImage"
              name="editImage"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
            />
          </div>

          <div className="mt-4 flex w-1/2 justify-evenly">
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
                displayForm("edit-product-form");
                resetForm("edit-product-container");
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

export default EditProduct;
