import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../lib/Contexts";

export default function AddToCart({ item }) {
  const [count, setCount] = useState(item.count || 0);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const cartItem = cartItems.find((currItem) => currItem.name === item.name);
    setCount(cartItem ? cartItem.count : 0);
  }, [item, cartItems]);

  const handleButtonClick = (e) => {
    const op = e ? e.target.innerText : "+";
    const newCount = op === "+" ? count + 1 : count - 1;

    setCount(newCount);

    if (op === "-" && newCount === 0) {
      removeFromCart(item.name);
    } else {
      addToCart({ ...item, count: newCount });
    }
  };
  return (
    <div className="border-[1px]  border-gray-300 w-20 text-center py-1 rounded-lg font-bold shadow-sm bg-[var(--buttons)] text-gray-100  hover:scale-105 transition-transform">
      {count === 0 ? (
        <div
          className=" w-full hover:cursor-pointer "
          onClick={() => handleButtonClick()}
        >
          ADD
        </div>
      ) : (
        <div className="flex w-full  ">
          <div
            className="flex-1  hover:cursor-pointer"
            onClick={handleButtonClick}
          >
            -
          </div>
          <div className="flex-1  border-x-2 hover:cursor-default">{count}</div>
          <div
            className="flex-1  hover:cursor-pointer"
            onClick={handleButtonClick}
          >
            +
          </div>
        </div>
      )}
    </div>
  );
}
