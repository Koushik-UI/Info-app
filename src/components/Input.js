import React from "react";
import PropTypes from "prop-types";

export const Input = ({ label, id, error, required, ...props }) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={`input_${id}`} className="font-bold">
        {label}
        {required ? <sup>*</sup> : null}
      </label>
      <input
        id={`input_${id}`}
        className={`w-full border-solid border-x border-y ${
          error ? "border-red-500" : "border-gray-400"
        } rounded text-xl p-2 tracking-wide`}
        {...props}
      />
      {error ? <p className="text-red-500">{error}</p> : null}
    </div>
  );
};

Input.propTypes = { id: PropTypes.string.isRequired };
