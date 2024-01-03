import { StylesConfig } from "react-select";

export const colorStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#E8E8E8",
    border: "none",
    width: "125px",
  }),
  option: (styles) => ({
    ...styles,
    backgroundColor: "#E8E8E8",
  }),
  input: (styles) => ({
    ...styles,
  }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles, { data }) => ({ ...styles }),
};
