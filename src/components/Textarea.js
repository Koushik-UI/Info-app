import React from "react";
import PropTypes from "prop-types";

export const Textarea = ({ label, id, ...props }) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={`textarea_${id}`} className="font-bold">
        {label}
      </label>
      <textarea
        className="p-2 border-gray-400 border-solid border-x border-y rounded"
        id={`textarea_${id}`}
        {...props}
      ></textarea>
    </div>
  );
};

Textarea.propTypes = { id: PropTypes.string.isRequired };
