import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Cart from "../components/Cart/Cart";
import { CartContext } from "../lib/Contexts";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const totalItems = cartItems.reduce((acc, curr) => acc + curr.count, 0);
    setTotal(totalItems);
  }, [cartItems]);

  const navigate = useNavigate();

  return (
    <div className="flex z-50 justify-between h-auto px-8 py-4 fixed top-0 left-0 right-0 bg-[var(--background-color)]">
      <div className="hover:cursor-pointer" onClick={() => navigate("/")}>
        <img src="logo.png" alt="" className="h-16" />
      </div>
      <div className="flex gap-8 items-center">
        <div className="hidden lg:flex items-center gap-8 text-gray-700 font-medium tracking-wide">
          <NavLink
            to="/"
            className="transition-transform hover:scale-110 hover:text-gray-800"
          >
            HOME
          </NavLink>
          <NavLink
            to="/menu"
            className="transition-transform hover:scale-110 hover:text-gray-800"
          >
            MENU
          </NavLink>
          <NavLink
            to="/service"
            className="transition-transform hover:scale-110 hover:text-gray-800"
          >
            SERVICE
          </NavLink>
          <NavLink
            to="about"
            className="transition-transform hover:scale-110 hover:text-gray-800"
          >
            ABOUT
          </NavLink>
        </div>
        <button
          type="button"
          className="relative transition-transform hover:scale-110"
          onClick={handleShow}
        >
          <img src="cart.png" alt="" className="w-6 " />
          {total > 0 ? (
            <div className="absolute flex items-center justify-center top-[-8px]  right-[-8px] w-4 h-4 bg-red-600 rounded-full text-white text-[10px] ">
              <span>{total}</span>
            </div>
          ) : (
            ""
          )}
        </button>
        {show ? <Cart handleShow={handleShow} /> : ""}
      </div>
    </div>
  );
}
