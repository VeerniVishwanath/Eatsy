import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../lib/Contexts";
import AddToCart from "../AddToCart/AddToCart";
import { useNavigate } from "react-router-dom";

export default function Cart({ handleShow }) {
  const [subTotal, setSubTotal] = useState(0);
  const { cartItems, clearCart } = useContext(CartContext);
  const DELIVERY_FEES = 50;

  const handleClear = () => {
    clearCart();
  };

  useEffect(() => {
    const subTotal = cartItems.reduce(
      (acc, currItem) => acc + currItem.price * currItem.count,
      0
    );
    setSubTotal(subTotal);
  }, [cartItems]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between fixed pt-8 pb-4 px-2 shadow-2xl bg-gray-100 top-0 left-0 sm:left-auto sm:right-0 h-dvh w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
      {/* Header */}
      <div className="flex items-end px-4 justify-between">
        <button
          type="button "
          className="w-8 transition hover:scale-110"
          onClick={handleShow}
        >
          <img src="back.png" alt="" />
        </button>
        <span className="font-bold text-xl text-gray-800">Cart</span>
        <button
          type="button"
          onClick={handleClear}
          className="w-8 transition hover:scale-110"
        >
          <img src="bin.png" alt="" />
        </button>
      </div>
      {/* Cart */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-full">
          <img src="emptyCart.png" alt="" />
          <span className="text-center text-gray-800 text-3xl font-semibold pt-8">
            Add some Items to your cart
          </span>
        </div>
      ) : (
        <div className=" bg-zinc-800 mt-8 h-full rounded-t-2xl  overflow-y-auto no-scrollbar">
          {/* Cart List */}
          <div className="flex flex-col items-center gap-8 h-1/2 overflow-y-auto no-scrollbar py-8 px-4">
            {cartItems.map((item) => (
              <CartCard item={item} />
            ))}
          </div>
          {/* Bill */}
          <div className="flex justify-center items-center h-2/3 bg-zinc-700 rounded-t-2xl">
            <div className="flex flex-col gap-8 w-2/3 h-2/3">
              <p className="flex justify-between text-gray-400 text-xl font-medium">
                Sub Total <span>₹ {subTotal}</span>
              </p>
              <p className="flex justify-between text-gray-400 text-xl font-medium">
                Delivery <span>₹ {DELIVERY_FEES}</span>
              </p>
              <hr className="border-gray-600 border-[1.5px]" />
              <p className="flex justify-between text-2xl text-gray-200 font-bold">
                Total <span>₹ {subTotal + DELIVERY_FEES}</span>
              </p>
              <button
                onClick={() => {
                  handleShow();
                  navigate("checkout");
                }}
                className="bg-[var(--highlights)] py-3 mb-8 rounded-full text-gray-200 font-medium text-xl transition-all hover:scale-105 "
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CartCard({ item }) {
  return (
    <div className="flex justify-between px-4 items-center bg-zinc-700 py-4 rounded-lg w-3/4">
      <div className="flex gap-4">
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/${
            import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
          }/o/${encodeURIComponent(item["imagePath"])}?alt=media`}
          alt={item.name}
          className="h-16"
        />
        <div className="flex flex-col gap-2 text-white font-medium">
          <span className="text-lg">{item.name}</span>
          <span className="text-sm">₹ {item.price}</span>
        </div>
      </div>
      <AddToCart item={item} />
    </div>
  );
}
