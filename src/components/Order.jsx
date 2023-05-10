import React from "react";
import { deleteOrder, updateOrder, getOrderIndex } from "../controllers/orders/orders.functions";
import { Context } from "../context/Context";
import { useContext } from "react";
import { getOrdersCount, getTotalOrders } from "../controllers/orders/orders.functions";
import { BsFillTrashFill } from "react-icons/bs";
import { auth } from "../config/firebase";

function Order({ order }) {

  const { setOrders, orders, setCountOrders, setTotalPrice } = useContext(Context);

  const handleDeleteOrder = (id) => {  
    const index = getOrderIndex(id);
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    deleteOrder(index);
    var count = getOrdersCount();
    setCountOrders(count);
    var total = getTotalOrders();
    setTotalPrice(total);
  };

  return (
    <div className="ShoppingCart__item p2 flex mb-5 mr-4">
      <div className="col bg-white rounded-l-lg p-2 border-y border-l">
        <div className="ShoppingCart__item__image h-20 w-20 flex justify-center items-center"
        >
          <img
            className="rounded-lg h-16"
            src={order.image}
            alt="product"
          />
        </div>
      </div>
      <div className="flex flex-1 justify-center border-y border-r rounded-r-lg">
        <div className="ShoppingCart__item__details flex w-full p-2 flex-row text-left">
          <div className="flex w-11/12 flex-col align-middle">
            <p className=" text-base font-semibold">{ order.name }</p>
            <p>Units: { order.unidades }</p>
            <p>{ order.price },00 €</p>
          </div>
          <div className="flex w-1/12 mr-2 items-end pb-2">
            <button className="text-center scale-150 hover:text-danger" onClick={ () => {handleDeleteOrder(order.id)} }><BsFillTrashFill /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
