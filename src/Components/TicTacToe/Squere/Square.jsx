import { useState } from "react";

export default function Square({ value, onSquereClick }) {
  return (
    <>
      <button
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 text-3xl sm:text-4xl font-bold rounded-md transition-all transform bg-teal-500 text-white shadow-lg hover:bg-teal-600 active:scale-95 focus:outline-none focus:ring-4 focus:ring-teal-400 focus:ring-opacity-50 m-[2px]"
        onClick={onSquereClick}
      >
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity hover:opacity-10 rounded-md"></div>
        {value}
      </button>
    </>
  );
}
