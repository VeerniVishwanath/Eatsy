import React, { useState } from "react";

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
      <div className="flex flex-col items-center justify-between h-36  lg:h-40  ml-auto text-right pr-4">
        <AddToCart />
        <div>
          <p className="text-xl font-semibold text-gray-700">{item.name}</p>
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

function AddToCart() {
  const [count, setCount] = useState(0);
  const handleButtonClick = (e) => {
    const op = e ? e.target.innerText : "+";
    setCount((prev) => eval(`${prev} ${op} 1`));
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
