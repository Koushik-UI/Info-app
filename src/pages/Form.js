import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ContactInfo,
  EducationalInfo,
  Loader,
  PersonalInfo,
} from "../components";
import {
  clearAPIError,
  nextStep,
  postUserFromForm,
  previousStep,
} from "../store";

export const Form = () => {
  const {
    activeStep: step,
    loading,
    error,
    ...state
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      {loading ? <Loader /> : null}
      <div className="w-3/4 flex flex-col gap-2 mx-auto border-2 border-solid border-gray-300 rounded p-8">
        {step === 1 ? (
          <PersonalInfo />
        ) : step === 2 ? (
          <EducationalInfo />
        ) : step === 3 ? (
          <ContactInfo />
        ) : null}
        {error ? (
          <p className="flex justify-between items-center text-red-500 text-center text-xl bg-red-100 p-3 rounded mt-3">
            Error: {error.message}
            <Button onClick={() => dispatch(clearAPIError())}>X</Button>
          </p>
        ) : null}
        <footer className="flex justify-between mt-8">
          <Button
            onClick={() => dispatch(previousStep())}
            disabled={step === 1}
          >
            Back
          </Button>
          <Button
            onClick={() =>
              step === 3
                ? dispatch(postUserFromForm(state))
                : dispatch(nextStep())
            }
          >
            {step === 3 ? "Submit" : "Next"}
          </Button>
        </footer>
      </div>
    </>
  );
};
