import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col gap-8 justify-between bg-[#111827] min-h-[35dvh] w-full mt-32 p-8 text-gray-400">
      <div className="flex flex-col lg:flex-row ">
        <div className="w-44">
          <img src="logo.png" alt="" className="w-32 " />
        </div>
        <div className="flex ">
          <div className="w-44 flex flex-col ">
            <h2 className="font-bold text-white mb-5">COMPANY</h2>
            <Link
              href=""
              className="mb-1 hover:border-b-2 w-fit transition-all"
            >
              About us
            </Link>
            <Link
              href=""
              className="mb-1 hover:border-b-2 w-fit transition-all"
            >
              Career
            </Link>
            <Link
              href=""
              className="mb-1 hover:border-b-2 w-fit transition-all"
            >
              Team
            </Link>
            <Link
              href=""
              className="mb-1 hover:border-b-2 w-fit transition-all"
            >
              Contact us
            </Link>
          </div>
          <div className="w-44 flex flex-col ">
            <h2 className="font-bold text-white mb-5">PRODUCT</h2>
            <Link
              href=""
              className="mb-1 hover:border-b-2 w-fit transition-all"
            >
              Service
            </Link>
            <Link
              href=""
              className="mb-1 hover:border-b-2 w-fit transition-all"
            >
              Freelancer
            </Link>
            <Link
              href=""
              className="mb-1 hover:border-b-2 w-fit transition-all"
            >
              Features
            </Link>
          </div>
          <div className="w-44 flex flex-col ">
            <h2 className="font-bold text-white mb-5">LEGAL</h2>
            <Link
              href=""
              className="mb-1 hover:border-b-2 w-fit transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href=""
              className="mb-1 hover:border-b-2 w-fit transition-all"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      <hr />
      {/* Copyrights & Links */}
      <div className="flex justify-between">
        <span>© {new Date().getFullYear()} Eatsy. All Rights Reserved.</span>
        <div className="flex gap-3">
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#000"
              className="fill-gray-500 hover:fill-white rounded-full"
            >
              <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-4 7.28V4.5h-2.29c-2.1 0-3.42 1.6-3.42 3.89v1.67H8v2.77h2.29v6.67h2.85v-6.67h2.29l.57-2.77h-2.86V8.94c0-1.1.58-1.66 1.72-1.66H16z" />
            </svg>
          </Link>
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#000"
              className="fill-gray-500 hover:fill-white rounded-full"
            >
              <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-4.42 5.8a3.28 3.28 0 0 0-3.2 4.03A9.32 9.32 0 0 1 5.61 6.4a3.26 3.26 0 0 0 1.02 4.38 3.27 3.27 0 0 1-1.49-.4v.03a3.28 3.28 0 0 0 2.64 3.22 3.3 3.3 0 0 1-1.49.06 3.29 3.29 0 0 0 3.07 2.28 6.59 6.59 0 0 1-4.86 1.36 9.29 9.29 0 0 0 5.03 1.47c6.04 0 9.34-5 9.34-9.34v-.42a6.65 6.65 0 0 0 1.63-1.7c-.59.26-1.22.44-1.89.52.68-.41 1.2-1.05 1.45-1.82-.64.38-1.34.65-2.09.8a3.28 3.28 0 0 0-2.4-1.04z" />
            </svg>
          </Link>
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#000"
              className="fill-gray-500 hover:fill-white rounded-full"
            >
              <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-4.89 4.5H8.9C6.33 4.5 4.6 6.15 4.5 8.66V15.09c0 1.3.42 2.41 1.27 3.23a4.34 4.34 0 0 0 2.88 1.17l.27.01h6.16c1.3 0 2.4-.42 3.18-1.18a4.25 4.25 0 0 0 1.23-2.95l.01-.26V8.9c0-1.28-.42-2.36-1.21-3.15a4.24 4.24 0 0 0-2.92-1.23l-.26-.01zm-6.2 1.4h6.24c.9 0 1.66.26 2.2.8.47.5.77 1.18.81 1.97V15.1c0 .94-.32 1.7-.87 2.21-.5.47-1.17.74-1.98.78H8.92c-.91 0-1.67-.26-2.21-.78-.5-.5-.77-1.17-.81-2V8.88c0-.9.26-1.66.8-2.2a2.98 2.98 0 0 1 2-.78h6.45-6.23zM12 8.1a3.88 3.88 0 0 0 0 7.74 3.88 3.88 0 0 0 0-7.74zm0 1.39a2.5 2.5 0 0 1 2.48 2.48A2.5 2.5 0 0 1 12 14.45a2.5 2.5 0 0 1-2.48-2.48A2.5 2.5 0 0 1 12 9.49zm4.02-2.36a.88.88 0 1 0 0 1.76.88.88 0 0 0 0-1.76z" />
            </svg>
          </Link>
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#000"
              className="fill-gray-500 hover:fill-white rounded-full"
            >
              <path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zM8.95 9.4H6.16v8.1h2.8V9.4zm6.84-.19c-1.32 0-2 .63-2.38 1.16l-.13.18V9.4h-2.79l.01.49V17.5h2.78v-4.52a1.52 1.52 0 0 1 1.52-1.64c.96 0 1.37.66 1.41 1.66v4.5H19v-4.64c0-2.49-1.37-3.65-3.2-3.65zM7.58 5.5C6.62 5.5 6 6.1 6 6.9c0 .73.54 1.32 1.38 1.4h.18c.97 0 1.57-.62 1.57-1.4-.01-.8-.6-1.4-1.55-1.4z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
