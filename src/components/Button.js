import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button
      className="disabled:opacity-50 active:bg-blue-100 border-solid border-2 border-gray-400 px-4 py-2 rounded text-lg font-semibold shadow-md hover:shadow-xl"
      {...props}
    >
      {children}
    </button>
  );
};
