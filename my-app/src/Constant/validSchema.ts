import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string().min(5, "Too Short!").required("Required"),
  type: Yup.string().min(5, "Too Short!").required("Required"),
  color: Yup.string().min(5, "Too Short!").required("Required"),
  location: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  id: Yup.string().required("Required"),
});
