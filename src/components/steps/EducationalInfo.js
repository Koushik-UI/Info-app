import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckBox, Input } from "..";
import { COMPONENTS, FormMeta } from "../../model";
import { updateState } from "../../store";

export const EducationalInfo = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const stateUpdate = (value) => dispatch(updateState(value));

  const renderComp = ({ component, name, props = {} }) => {
    switch (component) {
      case COMPONENTS.INPUT:
        let { conditionalRender, ...inputProps } = props;
        return !conditionalRender || (conditionalRender && state.isPG) ? (
          <Input
            id={name.toLowerCase()}
            label={name}
            value={state[name.toLowerCase()] || ""}
            onChange={({ target: { value } }) =>
              stateUpdate({ name: name.toLowerCase(), value })
            }
            {...inputProps}
          />
        ) : null;
      case COMPONENTS.CHECKBOX:
        return (
          <CheckBox
            id={name.toLowerCase()}
            label={name}
            {...props}
            checked={state.isPG}
            onChange={({ target: { checked } }) =>
              stateUpdate({ name: "isPG", value: checked })
            }
          />
        );
      default:
        break;
    }
  };
  return (
    <>
      <h1 className="text-3xl text-center my-3 font-bold">Educational Info</h1>
      {FormMeta.educationalInfo.map((comp) => (
        <Fragment key={comp.name}>{renderComp(comp)}</Fragment>
      ))}
    </>
  );
};
