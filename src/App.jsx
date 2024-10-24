import React, { useState } from "react";
import config from "../configuration";
import { getDatabase, onValue, ref } from "firebase/database";
import { CartContext, DataContext } from "./lib/Contexts";
import NavBar from "./sections/NavBar.jsx";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Footer from "./sections/Footer.jsx";
import { Outlet, useLoaderData } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./lib/store.js";

export async function loader() {
  const database = getDatabase(config);
  const collectionRef = ref(database, "menuItems");

  return new Promise((resolve, reject) => {
    onValue(
      collectionRef,
      (snapshot) => {
        const dataItem = snapshot.val();

        if (dataItem) {
          resolve(Object.entries(dataItem));
        } else {
          reject(new Error("Data Not Found"));
        }
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export default function App() {
  const data = useLoaderData();

  return (
    <div className="p-4 md:px-16">
      <Provider store={store}>
        <DataContext.Provider value={data}>
          <NavBar />
          {location.pathname === "/" ? (
            <>
              <Section1 />
              <Section2 />
              <Section3 />
            </>
          ) : (
            <Outlet />
          )}
          <Footer />
        </DataContext.Provider>
      </Provider>
    </div>
  );
}

/**  Code For Cart using ContextAPI
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const prevArr = prev.filter((curr) => curr.name !== item.name);
      return [...prevArr, item];
    });
  };

  const removeFromCart = (itemName) => {
    setCartItems(cartItems.filter((curr) => curr.name !== itemName));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );

}
*/
