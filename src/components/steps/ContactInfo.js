import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Textarea } from "..";
import { COMPONENTS, FormMeta } from "../../model";
import { setErrors, updateState } from "../../store";

export const ContactInfo = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const stateUpdate = (value) => dispatch(updateState(value));

  const Wrapper = (children) => {
    return (
      <div className="grid grid-cols-[100px,_1fr] gap-2">
        <Input
          label="Code"
          id="code"
          value={state["countryCode"]}
          onChange={({ target: { value } }) =>
            stateUpdate({ name: "countryCode", value })
          }
        />
        {children}
      </div>
    );
  };
  const renderComp = ({ component, name, props }) => {
    switch (component) {
      case COMPONENTS.INPUT:
        let comp = (
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
                      : props?.regex && !value.match(props.regex)
                      ? "Please enter a valid email."
                      : "",
                })
              );
            }}
            error={state.errors[name]}
            {...props}
          />
        );
        return name === "Phone Number" ? Wrapper(comp) : comp;
      case COMPONENTS.TEXTAREA:
        return (
          <Textarea
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
      <h1 className="text-3xl text-center my-3 font-bold">Contact Info</h1>
      {FormMeta.contactInfo.map((comp) => (
        <Fragment key={comp.name}>{renderComp(comp)}</Fragment>
      ))}
    </>
  );
};
