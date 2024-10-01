import React from "react";
import { replace, useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-[60dvh] w-full text-center">
      <h1 className="font-bold text-6xl pb-5">
        Thank you for <br /> your order
      </h1>
      <p className="text-gray-600">
        The operator will call you in a few minutes
      </p>
      <button
        type="button"
        onClick={() => navigate("/", { replace: true })}
        className="w-56 h-16 mt-10 bg-[var(--buttons)] rounded-md text-xl"
      >
        Home
      </button>
    </div>
  );
}
