/* eslint-disable no-unused-vars */
//sir er tar nam cartList.jsx
import React, { useState } from "react";
import Cartcheckout from "../../pages/Cartcheckout";
import { useCart } from "../../context/cartContext";

const Cartitem = (product) => {
  /**7jan start */

  const { cartList, total, clearCart } = useCart();

  /**7 jan close */

  const [cartCheck, setCartCheck] = useState(false);
  const { removeToCart } = useCart()
  return (
    <div className="px-5 py-8 md:p-10 mx-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          TOTAL AMOUNT: 
          <span className="text-blue-600">{total}</span>
        </h2>
        <span className="text-lg font-semibold text-gray-700">
          TOTAL ITEM: 
          <span className="text-blue-600">{cartList.length}</span>
        </span>
      </div>

      <div className="space-y-4 ">
        
        {cartList?.map((cartProduct) => (
          <div 
          key={cartProduct.id} 

          className="flex items-center justify-between p-4 border rounded-md">
            <img
              src={cartProduct.poster}
              alt="Django"
              className="w-20 h-20 rounded-md object-cover"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-medium text-gray-800">
                {cartProduct.name}
              </h3>
            </div>
            <span className="text-lg font-semibold text-gray-700">
              {cartProduct.price}
            </span>

            <div onClick={()=>removeToCart(product)}
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            <button >
              Remove
            </button>
            </div>

            

          </div>
        ))}
      </div>

      <div className="text-right">
        <button
          onClick={() => setCartCheck(!cartCheck)}
          type="button"
          className="w-cover mt-3 bg-blue-700 text-white text-sm py-2 px-4 rounded-md 
        hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-400"
        >
          Placeholder
        </button>


        <button
          onClick={() => clearCart()}
          type="button"
          className="w-cover mt-3 bg-blue-700 text-white text-sm py-2 px-4 rounded-md 
        hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-400"
        >
          ClearCart
        </button>

        {cartCheck && <Cartcheckout setCartCheck={setCartCheck} />}
      </div>
    </div>
  );
};

export default Cartitem;
