import * as Yup from "yup";

export const dataSchema = Yup.object().shape({
  name: Yup.string().min(5, "Too Short!").required("Required"),
  type: Yup.string().min(5, "Too Short!").required("Required"),
  color: Yup.string().min(5, "Too Short!").required("Required"),
  location: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  id: Yup.string().required("Required"),
});

export const AuthSchema = Yup.object().shape({
  email: Yup.string()
    .email("Non valid email")
    .matches(/^[\w]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required("Required"),
  password: Yup.string().min(5, "Too Short!").required("Required"),
});
