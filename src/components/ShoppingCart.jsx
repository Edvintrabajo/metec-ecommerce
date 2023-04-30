import React from "react";

function ShoppingCart() {
  return (
    <div className="ShoppingCart">

      <div className="ShoppingCart__items">
        <div className="ShoppingCart__item flex p2">
          <div className="col">
            <div className="ShoppingCart__item__image w-20 h-20">
              <img className="rounded-lg" src="https://picsum.photos/200" alt="product" />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="ShoppingCart__item__details w-3/4 h-20 flex flex-row text-left">
              <div className="w-2/3 flex flex-col align-middle">
                <p>Camiseta</p>
                <p>Unidades: 1</p>
                <p>20 €</p>
              </div>
              <div className="flex items-end w-1/3">
                <button className="h-10 text-center">X</button>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="ShoppingCart__item flex p2">
          <div className="col">
            <div className="ShoppingCart__item__image w-20 h-20">
              <img className="rounded-lg" src="https://picsum.photos/200" alt="product" />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="ShoppingCart__item__details w-3/4 h-20 flex flex-row text-left">
              <div className="w-2/3 flex flex-col align-middle">
                <p>Camiseta</p>
                <p>Unidades: 1</p>
                <p>20 €</p>
              </div>
              <div className="flex items-end w-1/3">
                <button className="h-10 text-center">X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
