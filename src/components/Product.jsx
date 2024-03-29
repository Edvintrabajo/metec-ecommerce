import React, { useContext } from "react";
import { Context } from "../context/Context";
import { MdOutlineShoppingCart } from "react-icons/md";
import { setOrder, checkOrder, getOrdersCount, getTotalOrders } from "../controllers/orders/orders.functions";
import { evalRatings } from "../controllers/products/products.functions";
import { v4 } from "uuid";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

function Product({ product  }) {
  const {
    orders, setOrders,
    setCountOrders,
    setTotalPrice,
    isAuthtorized,
  } = useContext(Context);

  const handleAddOrder = (newOrder) => {
    newOrder = { ...newOrder, id: v4() };
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
    <div className="relative mx-5 mb-14 w-64 h-[380px] overflow-visible rounded-xl bg-white p-4 text-black shadow-low-box-shadow tablet:mb-20 laptop:mx-6 laptop:mb-16 desktop:mx-20 desktop:my-20 desktop:scale-110">
      <div className="flex h-1/2 w-full justify-center rounded-lg bg-white p-2 align-middle border border-low-info transition-all hover:-translate-y-(25%) hover:shadow-high-info hover:border-transparent">
        <img
          className="h-40 rounded-2xl cursor-pointer"
          src={product.url}
          alt={product.name}
          onClick={() => {window.open(product.url, "_blank")}}
        />
      </div>
      <div className="p-2 h-[90px]">
        <h3 className="text-title text-base font-black m-h-12">{product.brand} - {product.name}</h3>
        <p className="h-12 overflow-y-auto text-sm">{product.description}</p>
      </div>
      <div className="flex">
          {evalRatings(product.ratings).map((star) => (
            <p key={star + v4()} 
              className="mr-1 text-3xl text-yellow-600 cursor-pointer transition-all hover:-translate-y-2 hover:scale-125">
              {star}
            </p>
          ))}
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
                
                <EditButton product={product}/>

                <DeleteButton product={product}/>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
