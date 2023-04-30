import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { setOrder } from "../controllers/orders/orders.functions";

<<<<<<< HEAD
function Product({ product, displayForm, getStates }) {
  const { setProductIdEdit, setImageRefName, data, setData } =
    useContext(Context);
=======
function Product({product, displayForm, getStates}) {
  const { setProductIdEdit, setImageRefName, data, setData, setOrders, orders } = useContext(Context);

  const handleAddOrder = (newOrder) => {
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    setOrder(updatedOrders);
  };
>>>>>>> 96a59a27fcee4489aacb012e712772a5362e19f9

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
          
<<<<<<< HEAD
          {/* USER-VIEW */}
          <button 
            className="border-2  border-info shadow-low-info hover:shadow-high-info flex p-2 rounded-full transition-all text-info hover:text-white hover:bg-info"
            onClick={() => setOrder({idproduct: product.id, name: product.name, price: product.price, image: product.url, unidades: 1})}
            >
            <MdOutlineShoppingCart />      
          </button>
        
          {/* ADMIN-VIEW */}
          {/* <button
            className="mr-2 flex rounded-full border-2 border-danger p-2 text-danger shadow-low-danger transition-all hover:bg-danger hover:text-white hover:shadow-high-danger"
            onClick={() => {
              displayForm("delete-product-form");
              setProductIdEdit(product.id);
              getStates(product.id, data, setData);
            }}
          >
            <BsFillTrashFill />
          </button>
=======
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
              className="border-2 border-danger shadow-low-danger hover:shadow-high-danger mr-2 flex p-2 rounded-full transition-all text-danger hover:text-white hover:bg-danger" 
              onClick={() => {
                displayForm('delete-product-form')
                setProductIdEdit(product.id)
                getStates(product.id, data, setData)
              }}>
              <BsFillTrashFill />      
            </button>
            
            <button
              className='border-2 border-edit shadow-low-edit hover:shadow-high-edit flex p-2 rounded-full transition-all text-edit hover:text-white hover:bg-edit' 
              onClick={() => {
                displayForm('edit-product-form')
                setProductIdEdit(product.id)
                setImageRefName(product.imageRefName)
                getStates(product.id, data, setData)
              }}>
              <MdModeEdit />
            </button> */}
          </div>
>>>>>>> 96a59a27fcee4489aacb012e712772a5362e19f9

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
          </button> */}
        </div>
      </div>
    </div>

  );
}

export default Product;
