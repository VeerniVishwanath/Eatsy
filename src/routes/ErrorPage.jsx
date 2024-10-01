import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
    const timer = setTimeout(() => {
      clearInterval(interval);
      navigate("/", { replace: true });
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
      <img src="404Error.png" alt="" />
      <h1 className="font-medium text-lg text-gray-500">
        Redirecting to Home in {counter}
      </h1>
    </div>
  );
}
