import React, { useContext } from "react";
import { DataContext } from "../lib/Contexts";
import ItemCard from "../components/ItemCard/ItemCard";

export default function Section2() {
  const data = useContext(DataContext);
  if (!data) {
    return <div>Loading...</div>;
  }
  const fruits = data.find((category) => category[0] === "fruits");

  if (!fruits) {
    return <div>Items Not Found</div>;
  }
  return (
    <section className="pt-32">
      <h2 className="text-2xl font-semibold pb-4  ">
        Our Fresh & Healthy Fruits{" "}
        <hr className="border-[2.5px] rounded-xl mt-2 border-orange-500 w-36" />
      </h2>
      <div className="flex gap-24 py-20 overflow-x-auto no-scrollbar snap-x snap-mandatory cursor-grab ">
        {fruits[1].map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
