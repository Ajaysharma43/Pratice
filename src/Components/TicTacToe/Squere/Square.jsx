import { useState } from "react";

export default function Square({value,onSquereClick}) {
    return(
        <>
<button 
  className="border border-black h-12 w-12 text-4xl font-bold flex items-center justify-center rounded-md hover:bg-gray-200 active:bg-gray-300 transition-all focus:ring focus:ring-offset-2 focus:ring-sky-400" 
  onClick={onSquereClick}
>
  {value}
</button>
        </>
    )
}