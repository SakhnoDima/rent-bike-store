import { Field, Formik, Form } from "formik";
import React from "react";
import { AuthSchema, authInputs } from "../../Constant";

import Button, { ButtonType } from "../Button/Button";
import { inputValidator } from "../../utils/inputValidator";
import { useAppDispatch } from "../../hooks/hooks";
import { logIn, register } from "../../redux/auth/authThunk";

interface IAuthorizationForm {
  action: "login" | "register";
}

export const AuthorizationForm: React.FC<IAuthorizationForm> = ({ action }) => {
  const dispatch = useAppDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AuthSchema}
      onSubmit={(values, { resetForm }) => {
        switch (action) {
          case "register":
            dispatch(
              register({
                email: values.email,
                password: values.password,
              })
            );
            break;
          case "login":
            dispatch(
              logIn({
                email: values.email,
                password: values.password,
              })
            );
            break;
          default:
            break;
        }

        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col gap-[16px]">
          {authInputs.map((item) => (
            <div className="relative self-stretch" key={item.inputName}>
              <Field
                as={item.as}
                className={`w-[100%] px-[8px] py-[4px]  border-[2px] rounded placeholder:font-poppins placeholder:text-sm placeholder:leading-none
                  ${
                    inputValidator(item, errors, touched).iserror
                      ? "border-red-400"
                      : ""
                  }`}
                name={item.inputName}
                required
                placeholder={item.placeholder}
              />

              {inputValidator(item, errors, touched).iserror ? (
                <p className="text-xs text-red-600 text-center  absolute bottom-[-16px] right-[16px]">
                  {inputValidator(item, errors, touched).message}
                </p>
              ) : null}
            </div>
          ))}

          <Button prime={true} type={ButtonType.SUBMIT} name="SAVE" />
        </Form>
      )}
    </Formik>
  );
};
