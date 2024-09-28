import React from "react";
import AddToCart from "../AddToCart/AddToCart";

export default function ItemCard({ item }) {
  return (
    <div className="relative snap-start flex shadow-lg bg-white bg-opacity-40 hover:drop-shadow-lg min-w-80  px-4 pt-8 pb-2 rounded-2xl">
      <img
        src={`https://firebasestorage.googleapis.com/v0/b/${
          import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
        }/o/${encodeURIComponent(item["imagePath"])}?alt=media`}
        alt={item.name}
        className="absolute w-32 lg:w-40  top-[-1rem] transition-transform hover:scale-110  "
      />
      <div className="flex flex-col items-end justify-between h-36 lg:h-44  ml-auto text-right pr-4">
        <AddToCart item={item} />
        <div className="">
          <p className="text-lg lg:text-xl font-semibold text-gray-700">
            {item.name}
          </p>
          <p className="text-sm font-medium text-gray-500">
            {item.calories} Kcal
          </p>
          <p className="font-semibold text-lg">
            <span className="text-red-500 font-medium pr-[2px]  ">₹</span>
            {item.price}
          </p>
        </div>
      </div>
    </div>
  );
}
