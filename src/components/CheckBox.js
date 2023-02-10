import React from "react";
import PropTypes from "prop-types";

export const CheckBox = ({ label, id, ...props }) => {
  return (
    <div className="flex gap-2 text-lg">
      <input type="checkbox" id={`${id}_check`} {...props} />
      <label htmlFor={id + "_check"}>{label}</label>
    </div>
  );
};

CheckBox.propTypes = { id: PropTypes.string.isRequired };
