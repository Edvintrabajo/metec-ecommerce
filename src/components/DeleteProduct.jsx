import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { deleteProduct } from "../controllers/products/products.functions";
import { Card, Typography } from "@material-tailwind/react";

function DeleteProduct({handleOpen, product}) {
  const { setProducts, setCurrentTenProducts, setCurrentPage, setCurrentCategory } = useContext(Context);

  return (
      <Card>
        <form
          id="delete-product-container"
          className="flex items-center justify-center flex-wrap border-2 bg-white p-4 text-center shadow-high-danger rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
            deleteProduct(product.id, setProducts, setCurrentTenProducts);
            setCurrentPage(1);
            setCurrentCategory("All");
            handleOpen();
          }}
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
              type="submit"
            >
              Delete
            </button>
            <button
              className="w-20 rounded-md border-2 border-cancel bg-cancel p-1 text-white shadow-low-cancel transition-all hover:bg-white hover:text-cancel hover:shadow-high-cancel"
              type="button"
              onClick={() => {handleOpen()}}
            >
              Cancel
            </button>
          </div>
        </form>
      </Card>
  );
}

export default DeleteProduct;
