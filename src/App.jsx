import React, { useEffect, useState } from "react";
import config from "../configuration";
import { getDatabase, onValue, ref } from "firebase/database";
import { CartContext, DataContext } from "./lib/Contexts";
import NavBar from "./sections/NavBar.jsx";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Footer from "./sections/Footer.jsx";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const database = getDatabase(config);
    const collectionRef = ref(database, "menuItems");

    function fetchData() {
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();

        if (dataItem) {
          setData(Object.entries(dataItem));
        }
      });
    }

    fetchData();
  }, []);

  return (
    <div className="p-4 md:px-16">
      <CartProvider>
        <DataContext.Provider value={data}>
          <NavBar />
          <Section1 />
          <Section2 />
          <Section3 />
          <Footer />
        </DataContext.Provider>
      </CartProvider>
    </div>
  );
}

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
