import React, { useContext } from "react";
import { DataContext } from "../../lib/Contexts";

export default function ShowcaseCard() {
  return (
    <div className="grid  lg:grid-cols-2 absolute lg:right-5 xl:right-10 gap-8">
      <Card category={2} />
      <Card category={3} />
      <Card category={5} />
      <Card category={4} />
    </div>
  );
}

function Card({ category }) {
  const data = useContext(DataContext);
  if (!data) {
    return <div>Loading...</div>;
  }
  const item = data[category][1][3];
  return (
    <div className="flex flex-col gap-3 items-center rounded-xl p-4 bg-[#ffffff77] backdrop-blur-sm shadow-md font-semibold">
      <img
        src={`https://firebasestorage.googleapis.com/v0/b/${
          import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
        }/o/${encodeURIComponent(item["imagePath"])}?alt=media`}
        alt=""
        className="w-28 mt-[-3rem]"
      />
      <div className=" text-neutral-500 text-lg">{item.name}</div>
      <p className=" text-gray-400 text-sm">
        {item.ingredients.slice(0, 2).join(" & ")}
      </p>
      <p>
        <span className="text-red-500">₹ </span>
        {item.price}
      </p>
    </div>
  );
}
