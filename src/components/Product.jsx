import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { setOrder } from "../controllers/orders/orders.functions";

function Product({product, displayForm, getStates}) {
  const { setProductIdEdit, setImageRefName, data, setData, setOrders, orders, setCountOrders, setTotalPrice } = useContext(Context);

  const handleAddOrder = (newOrder) => {
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    setOrder(newOrder);
    setCountOrders(updatedOrders.length);
    setTotalPrice(updatedOrders.reduce((acc, order) => acc + order.price, 0));
  };

  return (
    // NEW-CARD

    <div className="relative h-80 w-60 overflow-visible rounded-xl bg-white p-4 text-black">
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
      <div className="w-full flex justify-center items-center pt-3 border-t-2">
        <div className='w-1/2 text-left'>
          <span className="text-title font-black text-lg">{product.price},00 €</span>
        </div>
        
        <div className='flex justify-end  w-1/2'>
          <div className='flex justify-end  w-1/2'>
            
            {/* USER-VIEW */}
            <button 
              className="border-2  border-info shadow-low-info hover:shadow-high-info flex p-2 rounded-full transition-all text-info hover:text-white hover:bg-info"
              onClick={() => handleAddOrder({idproduct: product.id, name: product.name, price: product.price, image: product.url, unidades: 1})}
              >
              <MdOutlineShoppingCart />      
            </button>

            {/* ADMIN-VIEW */}
            {/* <button
              className='border-2 border-edit shadow-low-edit hover:shadow-high-edit flex p-2 rounded-full transition-all text-edit hover:text-white hover:bg-edit' 
              onClick={() => {
                displayForm('edit-product-form')
                setProductIdEdit(product.id)
                setImageRefName(product.imageRefName)
                getStates(product.id, data, setData)
              }}>
              <MdModeEdit />
            </button>  */}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Product;
