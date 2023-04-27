import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { BsFillTrashFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

function Product({ product, displayForm, getStates }) {
  const { setProductIdEdit, setImageRefName, data, setData } =
    useContext(Context);

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
      <div className="flex w-full items-center justify-center border-t-2 pt-3">
        <div className="w-1/2 text-left">
          <span className="text-title text-lg font-black">
            {product.price},00 €
          </span>
        </div>

        <div className="flex w-1/2  justify-end">
          {/* USER-VIEW */}
          {/* <button 
              className="border-2  border-info shadow-low-info hover:shadow-high-info flex p-2 rounded-full transition-all text-info hover:text-white hover:bg-info"
              >
              <MdOutlineShoppingCart />      
            </button> */}

          {/* ADMIN-VIEW */}
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
        </div>
      </div>
    </div>

    //     {/* RATING */}

    //     <div className="rating">
    //       <label htmlFor="star-1">
    //         <input className='hidden' type="radio" id="star-1" name="star-radio" value="star-1"/>
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
    //       </label>
    //       <label htmlFor="star-2">
    //         <input className='hidden' type="radio" id="star-2" name="star-radio" value="star-1"/>
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
    //       </label>
    //       <label htmlFor="star-3">
    //         <input className='hidden' type="radio" id="star-3" name="star-radio" value="star-1"/>
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
    //       </label>
    //       <label htmlFor="star-4">
    //         <input className='hidden' type="radio" id="star-4" name="star-radio" value="star-1"/>
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
    //       </label>
    //       <label htmlFor="star-5">
    //         <input className='hidden' type="radio" id="star-5" name="star-radio" value="star-1"/>
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
    //       </label>
    //     </div>
  );
}

export default Product;
