import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Select } from "..";
import { COMPONENTS, FormMeta } from "../../model";
import { setErrors, updateState } from "../../store";

export const PersonalInfo = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const stateUpdate = (value) => dispatch(updateState(value));
  const renderComp = ({ component, name, props }) => {
    switch (component) {
      case COMPONENTS.INPUT:
        return (
          <Input
            id={name.toLowerCase()}
            label={name}
            value={state[name.toLowerCase()] || ""}
            onChange={({ target: { value } }) =>
              stateUpdate({ name: name.toLowerCase(), value })
            }
            onBlur={({ target: { value } }) => {
              dispatch(
                setErrors({
                  name,
                  value:
                    props?.required && !value
                      ? "Required field cannot be empty."
                      : "",
                })
              );
            }}
            error={state.errors[name]}
            {...props}
          />
        );
      case COMPONENTS.SELECT:
        return (
          <Select
            id={name.toLowerCase()}
            label={name}
            value={state[name.toLowerCase()] || ""}
            onChange={({ target: { value } }) =>
              stateUpdate({ name: name.toLowerCase(), value })
            }
            {...props}
          />
        );
      default:
        break;
    }
  };
  return (
    <>
      <h1 className="text-3xl text-center my-3 font-bold">Personal Info</h1>
      {FormMeta.personalInfo.map((comp) => (
        <Fragment key={comp.name}>{renderComp(comp)}</Fragment>
      ))}
    </>
  );
};
