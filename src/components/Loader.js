import React from "react";

export const Loader = () => {
  return (
    <div className="absolute top-0 bottom-0 w-full h-full bg-stone-500 opacity-70 flex items-center justify-center">
      <span className="inline-flex h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-500 animate-spin justify-center items-center">
        <span className="inline-block h-14 w-14 rounded-full bg-stone-500"></span>
      </span>
    </div>
  );
};
