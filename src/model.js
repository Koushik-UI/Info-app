export const COMPONENTS = {
  INPUT: "input",
  SELECT: "select",
  CHECKBOX: "checkbox",
  TEXTAREA: "textarea",
  BUTTON: "button",
};
export const FormMeta = {
  personalInfo: [
    {
      name: "First Name",
      component: COMPONENTS.INPUT,
      props: {
        required: true,
      },
    },
    {
      name: "Last Name",
      component: COMPONENTS.INPUT,
    },
    {
      name: "Sex",
      component: COMPONENTS.SELECT,
      props: {
        options: [{ label: "Male" }, { label: "Female" }],
      },
    },
    {
      name: "Age",
      component: COMPONENTS.INPUT,
      props: {
        type: "number",
      },
    },
    {
      name: "Languages Known",
      component: COMPONENTS.INPUT,
    },
    {
      name: "Interests",
      component: COMPONENTS.INPUT,
    },
  ],
  educationalInfo: [
    {
      name: "10th Standard School Name",
      component: COMPONENTS.INPUT,
    },
    {
      name: "10th Standard Percentage",
      component: COMPONENTS.INPUT,
      props: {
        type: "number",
      },
    },
    {
      name: "12th Standard School Name",
      component: COMPONENTS.INPUT,
    },
    {
      name: "12th Standard Percentage",
      component: COMPONENTS.INPUT,
      props: {
        type: "number",
      },
    },
    {
      name: "UG College",
      component: COMPONENTS.INPUT,
    },
    {
      name: "UG University",
      component: COMPONENTS.INPUT,
    },
    {
      name: "UG Percentage",
      component: COMPONENTS.INPUT,
      props: {
        type: "number",
      },
    },
    {
      name: "Have you completed you PG?",
      component: COMPONENTS.CHECKBOX,
    },
    {
      name: "PG College",
      component: COMPONENTS.INPUT,
      props: {
        conditionalRender: true,
      },
    },
    {
      name: "PG University",
      component: COMPONENTS.INPUT,
      props: {
        conditionalRender: true,
      },
    },
    {
      name: "PG Percentage",
      component: COMPONENTS.INPUT,
      props: {
        conditionalRender: true,
        type: "number",
      },
    },
  ],
  contactInfo: [
    {
      name: "Email",
      component: COMPONENTS.INPUT,
      props: {
        type: "email",
        required: true,
        regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      },
    },
    {
      name: "Phone Number",
      component: COMPONENTS.INPUT,
      props: {
        type: "tel",
        maxLength: 10,
      },
    },
    {
      name: "Address",
      component: COMPONENTS.TEXTAREA,
      props: {
        rows: 4,
      },
    },
    {
      name: "City",
      component: COMPONENTS.INPUT,
    },
    {
      name: "State",
      component: COMPONENTS.INPUT,
    },
    {
      name: "Country",
      component: COMPONENTS.INPUT,
    },
  ],
};
