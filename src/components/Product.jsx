import React, { useEffect, useContext } from "react";
import { Context } from "../context/Context";
import { BsFillTrashFill } from "react-icons/bs";
import { MdModeEdit, MdOutlineShoppingCart } from "react-icons/md";
import { setOrder } from "../controllers/orders/orders.functions";

function Product({ product, displayForm, getStates }) {
  const {
    setProductIdEdit,
    setImageRefName,
    data,
    setData,
    setOrders,
    orders,
    setCountOrders,
    setTotalPrice,
    isAuthtorized,
  } = useContext(Context);

  const handleAddOrder = (newOrder) => {
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    setOrder(newOrder);
    setCountOrders(updatedOrders.length);
    setTotalPrice(updatedOrders.reduce((acc, order) => acc + order.price, 0));
  };

  return (
    // NEW-CARD

    <div className="relative m-6 h-80 w-60 overflow-visible rounded-xl bg-white p-4 text-black">
      <div className="flex h-1/2 w-full justify-center rounded-lg bg-white p-2 align-middle shadow-low-info transition-all hover:-translate-y-(25%) hover:shadow-high-info">
        <img
          className=" w-2/3 rounded-2xl"
          src={product.url}
          alt={product.name}
        />
      </div>
      <div className="p-2 pb-6">
        <h3 className="text-title text-lg font-black">{product.name}</h3>
        <p className="text-sm">{product.description}</p>
        <p>Ratings: {product.ratings}/10</p>
      </div>
      <div className="flex w-full items-center justify-center border-t-2 pt-3">
        <div className="w-1/2 text-left">
          <span className="text-title text-lg font-black">
            {product.price},00 €
          </span>
        </div>

        <div className="flex w-1/2  justify-end">
          <div className="flex w-1/2  justify-end">
            {/* USER-VIEW */}
            {!isAuthtorized ? (
              <button
                className="flex  rounded-full border-2 border-info p-2 text-info shadow-low-info transition-all hover:bg-info hover:text-white hover:shadow-high-info"
                onClick={() =>
                  handleAddOrder({
                    idproduct: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.url,
                    unidades: 1,
                  })
                }
              >
                <MdOutlineShoppingCart />
              </button>
            ) : (
              <>
                <button
                  className="mr-2 flex rounded-full border-2 border-danger p-2 text-danger shadow-low-danger transition-all hover:bg-danger hover:text-white hover:shadow-high-danger"
                  onClick={() => {
                    displayForm("delete-product-form");
                    setProductIdEdit(product.id);
                    getStates(product.id, data, setData);
                  }}
                >
                  <BsFillTrashFill />
                </button>
                <button
                  className="flex rounded-full border-2 border-edit p-2 text-edit shadow-low-edit transition-all hover:bg-edit hover:text-white hover:shadow-high-edit"
                  onClick={() => {
                    displayForm("edit-product-form");
                    setProductIdEdit(product.id);
                    setImageRefName(product.imageRefName);
                    getStates(product.id, data, setData);
                  }}
                >
                  <MdModeEdit />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
