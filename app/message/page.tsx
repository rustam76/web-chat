"use client";
import React from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";

const Message = () => {
  const imageLoader = ({ src, width, quality }: any) => {
    return `https://wallpapers.com/images/featured/${src}?w=${width}&q=${
      quality || 75
    }`;
  };


  const backButton = () => {
    window.history.back();
  };  
  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="flex justify-between items-center py-7 px-4 bg-slate-500">
        <div className="flex justify-center items-center gap-2">
          <button onClick={backButton}  className="mr-4">
            <FaArrowLeft className="h-6 w-6" />
          </button>
          <Image
            loader={imageLoader}
            src={"cool-profile-picture-87h46gcobjl5e4xu.jpg"}
            className="rounded-full border border-zinc-300"
            alt="user"
            width={40}
            height={40}
          />
          <p>Jhon Doe</p>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-end">
            <div className="bg-blue-200 p-4 rounded-md text-gray-700">
              Hello
            </div>
          </div>

          <div className="flex">
            <div className="bg-gray-300 p-4 rounded-md text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-200 p-4 rounded-md text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
          </div>

          <div className="flex">
            <div className="bg-gray-300 p-4 rounded-md text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              quaerat suscipit facilis asperiores maxime autem, veritatis earum
              aliquid, modi doloribus similique non quod ratione repellendus
              ipsa tempora officiis? Vero, voluptatum.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 text-gray-800 border rounded-full px-4 py-2 focus:outline-none"
        />
        <button className="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Message;
