import React from "react";
import PropTypes from "prop-types";

export const Select = ({ options, label, id, ...props }) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={`select_${id}`} className="font-bold">
        {label}
      </label>
      <select
        id={`select_${id}`}
        {...props}
        className="border-solid border-x border-y border-gray-400 rounded text-lg p-2 w-full"
      >
        <option></option>
        {options.map((option) => (
          <option key={option.label}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = { id: PropTypes.string.isRequired };
