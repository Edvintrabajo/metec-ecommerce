import React from "react";
import CustomParticles from "./CustomParticles";

function Error404Page() {

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <CustomParticles />
      <div className="text-white z-20">
        <h1 className="text-9xl tablet:scale-125 drop-shadow-lg shadow-black">Oops!</h1>
        <p className="tablet:scale-125 text-[rgb(2,226,254)]  text-2xl ml-2 mt-2 drop-shadow-lg shadow-black">Page not found</p>
        <div className="flex justify-center mt-48">
          <a href="/" className="w-28 p-1 text-xl rounded-lg text-white bg-info text-center border-info border hover:text-info hover:bg-white transition-all">Go back</a>
        </div>
      </div>
    </div>
  );
}

export default Error404Page;
