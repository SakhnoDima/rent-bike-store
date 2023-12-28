import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string().min(5, "Too Short!").required("Required"),
  type: Yup.string().min(5, "Too Short!").required("Required"),
  color: Yup.string().min(5, "Too Short!").required("Required"),
  wheelSize: Yup.number().required("Required"),
  price: Yup.number().required("Required"),
  id: Yup.string().required("Required"),
  desc: Yup.string().min(5, "To Short").required("Required"),
});
