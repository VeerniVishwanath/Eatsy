import React, { useContext, useState } from "react";
import { DataContext } from "../lib/Contexts";
import ItemCard from "../components/ItemCard/ItemCard";

export default function Section3() {
  const [category, setCategory] = useState("chicken");
  const data = useContext(DataContext);
  if (!data) {
    return <div>Menu Not Found...</div>;
  }

  const menuItems = data.find((curr) => curr[0] === category);

  const handleCategory = (category) => {
    setCategory(category);
  };

  return (
    <section className="pt-32">
      <h2 className="text-2xl font-semibold">Our Hot Dishes</h2>
      <hr className="border-[2.5px] border-orange-500 rounded-sm w-24 mt-2" />
      <div className="grid justify-items-center">
        <div className="flex overflow-auto gap-14 mt-8 p-4">
          {data.map((curr) => {
            return (
              <MenuCard
                key={curr[0]}
                item={curr[0]}
                category={category}
                handleCategory={handleCategory}
              />
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-20 ">
          {menuItems[1].map((item) => (
            <div key={item.name} className="flex justify-center">
              <ItemCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item, category, handleCategory }) {
  const selected = item.toLowerCase() === category.toLowerCase();
  return (
    <div
      className={`min-w-24 h-32 ${
        selected ? "bg-red-500 text-white" : "bg-gray-50 text-gray-700"
      }  rounded-xl flex flex-col py-4 justify-around items-center shadow-lg`}
      onClick={() => handleCategory(item)}
    >
      <img
        src="menuIcon.png"
        alt=""
        className={`w-12 ${selected ? "bg-white" : "bg-red-500"}  rounded-full`}
      />
      <p className="capitalize text-sm font-semibold">{item}</p>
    </div>
  );
}
