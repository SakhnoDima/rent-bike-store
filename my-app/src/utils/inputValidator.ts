import { FormikValues } from "formik";

interface IInputValidator {
  iserror: boolean;
  message: string | undefined;
}

export const inputValidator = (
  value: FormikValues,
  err: any,
  touched: any
): IInputValidator => {
  let iserror;
  let message;
  if (
    Object.keys(err).includes(value.inputName) &&
    Object.keys(touched).includes(value.inputName)
  ) {
    iserror = true;

    message = Object.entries(err).map((el) => {
      if (el[0] !== value.inputName) {
        return null;
      }

      return el[1];
    });
  } else iserror = false;

  return {
    iserror,
    message: message?.join(" "),
  };
};
