import React from "react";

function DemoTailwind() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-center bg-[red] text-[yellow]'>
        Hello world!
      </h1>

      <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-[12px]'>
        Save changes
      </button>
    </div>
  );
}

export default DemoTailwind;
