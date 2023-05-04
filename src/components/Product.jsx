import React, { useEffect, useContext } from "react";
import { Context } from "../context/Context";
import { BsFillTrashFill } from "react-icons/bs";
import { MdModeEdit, MdOutlineShoppingCart } from "react-icons/md";
import { setOrder, checkOrder, getOrdersCount, getTotalOrders } from "../controllers/orders/orders.functions";
import { evalRatings } from "../controllers/products/products.functions";

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
    if (checkOrder(newOrder.idproduct) === -1) {
      const updatedOrders = [...orders, newOrder];
      setOrder(newOrder);
      setOrders(updatedOrders);
      var count = getOrdersCount();
      setCountOrders(count);
      var total = getTotalOrders();
      setTotalPrice(total);
    } else {
      setOrder(newOrder);
      const updatedOrders = [...orders];
      updatedOrders[checkOrder(newOrder.idproduct)].unidades++;
      setOrders(updatedOrders);
      var count = getOrdersCount();
      setCountOrders(count);
      var total = getTotalOrders();
      setTotalPrice(total);
    }
  };
        
  return (
    // NEW-CARD

    <div className="relative mx-6 mb-10 w-60 overflow-visible rounded-xl bg-white p-4 text-black">
      <div className="flex h-1/2 w-full justify-center rounded-lg bg-white p-2 align-middle shadow-low-info transition-all hover:-translate-y-(25%) hover:shadow-high-info">
        <img
          className=" w-2/3 rounded-2xl"
          src={product.url}
          alt={product.name}
        />
      </div>
      <div className="p-2 pb-6">
        <h3 className="text-title text-lg font-black">{product.name}</h3>
        <p className="h-10 overflow-y-auto text-sm">{product.description}</p>
        <p className="pt-3 text-3xl text-yellow-500">
          {evalRatings(product.ratings)}
        </p>
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
